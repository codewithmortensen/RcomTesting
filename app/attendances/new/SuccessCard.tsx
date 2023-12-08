'use client';
import { CheckInStatus } from '@/app/types/definitions';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Source_Code_Pro } from 'next/font/google';
import CheckInStatusBadge from '../components/CheckInStatus';
import dayjs from 'dayjs';
const code = Source_Code_Pro({ subsets: ['latin'] });

interface SuccessCardProps {
  attendance_date: Date;
  attendance_id: number;
  check_in_status: CheckInStatus;
  first_name: string;
  last_name: string;
}

interface AttendanceProps {
  attendance: SuccessCardProps;
}

const SuccessCard = ({ attendance }: AttendanceProps) => {
  return (
    <div>
      <p className={cn(code.className, 'font-bold antialiased mb-1')}>
        {attendance.first_name} {attendance.last_name}
      </p>

      <p className='text-sm font-medium text-gray-500'>
        {dayjs(attendance.attendance_date).format('dddd, MMMM D, YYYY')}
      </p>
      <CheckInStatusBadge status={attendance.check_in_status} />
    </div>
  );
};
export default SuccessCard;
