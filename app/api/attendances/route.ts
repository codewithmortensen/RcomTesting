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
	TO_CHAR(check_in_time, 'HH12:MI:SS AM') as check_in_time,
	TO_CHAR(att.check_out_time, 'HH12:MI:SS AM') as check_out_time,
	att.check_in_status,
	att.check_out_status,
	att.work_day_status
	FROM AttendanceTable att
	JOIN EmployeeTable em USING (employee_id)
	JOIN ProfileTable p  USING (profile_id)
	order by att.attendance_date desc`;
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch the emplooyee attendances' },
      { status: 500 }
    );
  }
};
