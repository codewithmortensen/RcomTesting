import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useAttendances } from '../hook/useAttendances';
import dayjs from 'dayjs';
import CheckInStatusBadge from './CheckInStatus';
import { sort } from 'fast-sort';

const RecentActivities = () => {
  const { data: attendances } = useAttendances();

  const sortedActivities = sort(attendances || []).desc(
    (u) => u.attendance_date
  );

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className='text-xs'>
            <TableHead>Employee</TableHead>

            <TableHead>Check In</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='text-xs font-thin'>
          {sortedActivities.slice(0, 5)?.map((attendance) => (
            <TableRow key={attendance.employee_id}>
              <TableCell>{attendance.first_name}</TableCell>
              <TableCell>{attendance.check_in_time}</TableCell>
              <TableCell>
                <CheckInStatusBadge status={attendance.check_in_status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default RecentActivities;
