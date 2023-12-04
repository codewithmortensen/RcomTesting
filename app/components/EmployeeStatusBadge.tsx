import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Status } from '../types/definitions';

interface EmployeeStatusBadgeProps {
  status: Status;
}

const EmployeeStatusBadge = ({ status }: EmployeeStatusBadgeProps) => {
  const variants =
    status === 'ACTIVE'
      ? 'bg-green-500'
      : status === 'INACTIVE'
      ? 'bg-red-500'
      : status === 'ON_LEAVE'
      ? 'bg-yellow-500'
      : status === 'SUSPENDED'
      ? 'bg-blue-500'
      : 'bg-gray-500';
  return (
    <Badge
      className={cn(variants, 'rounded-sm text-xs font-normal tracking-wide')}>
      {status === 'ACTIVE'
        ? 'Active'
        : status === 'INACTIVE'
        ? 'Inactive'
        : status === 'ON_LEAVE'
        ? 'On Leave'
        : status === 'SUSPENDED'
        ? 'Suspended'
        : 'Terminated'}
    </Badge>
  );
};
export default EmployeeStatusBadge;
