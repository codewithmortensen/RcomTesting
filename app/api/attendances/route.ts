import { sql } from '@/app/utils/query';
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
