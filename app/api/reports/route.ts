import { sql } from '@/app/utils/query';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const data = await sql`
	SELECT 
	employee_id,
	first_name,
	last_name,
	COUNT(CASE WHEN work_day_status = 'ABSENT' THEN 1 END) AS absent_count,
	COUNT(CASE WHEN check_in_status = 'ON_TIME' THEN 1 END) AS on_time_check_in_count,
	COUNT(CASE WHEN check_in_status = 'LATE' THEN 1 END) AS late_check_in_count,
	COUNT(CASE WHEN check_out_status = 'ON_TIME' THEN 1 END) AS on_time_check_out_count,
	COUNT(CASE WHEN check_out_status = 'EARLY' THEN 1 END) AS early_check_out_count,
	COUNT(CASE WHEN work_day_status = 'PRESENT' THEN 1 END) AS present_count
	FROM ProfileTable
	JOIN EmployeeTable USING (profile_id)
	JOIN AttendanceTable USING (employee_id)
	GROUP BY employee_id, first_name, last_name
	`;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
};
