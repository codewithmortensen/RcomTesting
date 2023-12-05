import { CheckOutStatus } from '@/app/types/definitions';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface CheckOutStatusBadgeProps {
  status: CheckOutStatus;
}

const CheckOutStatusBadge = ({ status }: CheckOutStatusBadgeProps) => {
  const variant = status === 'ON_TIME' ? 'bg-green-500' : 'bg-red-500';
  return (
    <Badge className={cn(variant, 'rounded-sm text-xs text-white font-normal')}>
      {status === 'ON_TIME' ? 'On time' : 'Early'}
    </Badge>
  );
};
export default CheckOutStatusBadge;
