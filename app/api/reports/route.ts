import { sql } from '@/app/utils/query';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);

  let from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10); // a week ago
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
    WHERE attendance_date BETWEEN ${from} AND ${to}
    GROUP BY employee_id, first_name, last_name
    `;
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
};
