import { employeeIdSchema } from '@/app/types/schema';
import { sql } from '@/app/utils/query';
import { sq } from 'date-fns/locale';
import dayjs from 'dayjs';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);

  let from = new Date().toISOString().slice(0, 10);
  let to = new Date().toISOString().slice(0, 10);

  if (url.searchParams.get('from')) {
    const fromDate = new Date(url.searchParams.get('from')!);
    if (isNaN(fromDate.getTime())) {
      return NextResponse.json({ error: 'Invalid from date' }, { status: 400 });
    }
    from = fromDate.toISOString().slice(0, 10);
  }

  if (url.searchParams.get('to')) {
    const toDate = new Date(url.searchParams.get('to')!);
    if (isNaN(toDate.getTime())) {
      return NextResponse.json({ error: 'Invalid to date' }, { status: 400 });
    }
    to = toDate.toISOString().slice(0, 10);
  }

  try {
    const result = await sql`
    SELECT 
    em.employee_id,
    p.first_name,
    p.last_name,
    att.attendance_date,
    TO_CHAR(check_in_time, 'HH12:MI:SS AM') as check_in_time,
    TO_CHAR(att.check_out_time, 'HH12:MI:SS AM') as check_out_time,
    att.check_in_status,
    att.check_out_status,
    att.work_day_status
    FROM AttendanceTable att
    JOIN EmployeeTable em USING (employee_id)
    JOIN ProfileTable p  USING (profile_id)
    WHERE att.attendance_date BETWEEN ${from} AND ${to}
    ORDER BY att.attendance_date desc
    `;
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch the employee attendances' },
      { status: 500 }
    );
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  try {
    const validation = employeeIdSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      );
    }
    const employee =
      await sql`SELECT EXISTS(SELECT 1 FROM EmployeeTable WHERE employee_id = ${validation.data.employee_id})`;
    if (!employee[0].exists) {
      return NextResponse.json(
        { error: 'Employee does not exist' },
        { status: 400 }
      );
    }

    try {
      const response = await fetch(
        'http://worldtimeapi.org/api/timezone/America/Port-au-Prince'
      );
      const data = await response.json();
      const currentDateTime = data.datetime;
      const currentDate = dayjs(currentDateTime).format('YYYY-MM-DD');

      const attendance =
        await sql`SELECT EXISTS(SELECT 1 FROM AttendanceTable WHERE employee_id = ${validation.data.employee_id} AND attendance_date = ${currentDate})`;
      if (!attendance[0].exists) {
        const currentTime = dayjs(currentDateTime).format('HH:mm:ss');
        const employeeData =
          await sql`SELECT start_shift FROM EmployeeTable WHERE employee_id = ${validation.data.employee_id}`;
        const employeeShift = employeeData[0].start_shift;

        let checkInStatus;
        if (currentTime > employeeShift) {
          checkInStatus = 'LATE';
        } else {
          checkInStatus = 'ON_TIME';
        }
        const newAttendance =
          await sql`INSERT INTO AttendanceTable (employee_id, attendance_date, check_in_time, check_in_status) VALUES (${validation.data.employee_id}, ${currentDate}, ${currentTime}, ${checkInStatus})`;
        return NextResponse.json(
          { message: 'Attendance record created', result: newAttendance },
          { status: 200 }
        );
      }
    } catch (error) {
      console.log(error, { eror: 'Failed to fetch the current date and time' });
      return NextResponse.json(
        { eror: 'Failed to fetch the current date and time' },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: 'Attendance record already exists for today' },
      { status: 400 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server eror' },
      { status: 500 }
    );
  }
};
