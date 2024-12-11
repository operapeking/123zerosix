import { Badge } from '@/components/ui/badge';
import { TrainType } from '@/types/train';

const TYPE_MAP: Record<TrainType, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
  动车: { label: '动车', variant: 'default' },
  高铁: { label: '高铁', variant: 'destructive' },
  特快: { label: '特快', variant: 'secondary' },
  直达: { label: '直达', variant: 'outline' },
};

interface TrainBadgeProps {
  type: TrainType;
}

export function TrainBadge({ type }: TrainBadgeProps) {
  const config = TYPE_MAP[type];
  return (
    <Badge variant={config.variant} className="ml-2">
      {config.label}
    </Badge>
  );
}