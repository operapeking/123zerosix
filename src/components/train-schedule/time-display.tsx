import { Badge } from '@/components/ui/badge';
import { formatDisplayTime } from '@/lib/time';

interface TimeDisplayProps {
  time: string;
  showPlaceholder?: boolean;
}

export function TimeDisplay({ time, showPlaceholder = false }: TimeDisplayProps) {
  if (showPlaceholder || time === '-') {
    return <span className="text-muted-foreground">-</span>;
  }

  const { displayTime, plusDays } = formatDisplayTime(time);

  return (
    <div className="relative inline-flex items-center">
      <span>{displayTime}</span>
      {plusDays > 0 && (
        <Badge 
          variant="outline"
          className="ml-1 px-1 py-0 h-4 text-xs text-muted-foreground"
        >
          +{plusDays} 天
        </Badge>
      )}
    </div>
  );
}