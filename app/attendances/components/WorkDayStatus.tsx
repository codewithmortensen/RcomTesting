import { WorkDayStatus } from '@/app/types/definitions';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface WorkDayStatusProps {
  status: WorkDayStatus;
}

const WorkDayStatus = ({ status }: WorkDayStatusProps) => {
  const variant = status === 'PRESENT' ? 'bg-green-500' : 'bg-red-500';
  return (
    <Badge className={cn(variant, 'text-xs text-white rounded-sm font-normal')}>
      {status === 'PRESENT' ? 'Present' : 'Absent'}
    </Badge>
  );
};
export default WorkDayStatus;
