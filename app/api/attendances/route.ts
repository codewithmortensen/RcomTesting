import { sql } from '@/app/utils/query';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    const result = await sql`
	SELECT 
	em.employee_id,
	p.first_name,
	p.last_name,
	att.attendance_date,
	att.check_in_time,
	att.check_out_time,
	att.check_in_status,
	att.check_out_status,
	att.work_day_status
	FROM AttendanceTable att
	order by att.attendance_date desc


	JOIN EmployeeTable em USING (employee_id)
	JOIN ProfileTable p  USING (profile_id)`;
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch the emplooyee attendances' },
      { status: 500 }
    );
  }
};
