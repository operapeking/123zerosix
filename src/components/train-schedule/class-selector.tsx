import { TrainClass } from '@/types/train';
import { Button } from '@/components/ui/button';
import { Crown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ClassSelectorProps {
  classes: TrainClass[];
  selectedClass: TrainClass | null;
  onSelect: (trainClass: TrainClass) => void;
}

export function ClassSelector({ classes, selectedClass, onSelect }: ClassSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {classes.map((trainClass) => (
        <Button
          key={trainClass.name}
          variant={selectedClass?.name === trainClass.name ? "default" : "outline"}
          className="flex flex-col items-center p-4 h-auto relative"
          onClick={() => onSelect(trainClass)}
          disabled={trainClass.remainingTickets === 0}
        >
          <Badge 
            variant="secondary" 
            className="absolute top-2 right-2"
          >
            {trainClass.remainingTickets > 10 ? '充足' : `余 ${trainClass.remainingTickets}`}
          </Badge>
          <div className="flex items-center gap-2 mb-2">
            {trainClass.name === '商务座' && <Crown className="h-4 w-4" />}
            <span className="font-semibold">{trainClass.name}</span>
          </div>
          <span className="text-lg font-bold">￥{trainClass.price.toFixed(2)}</span>
        </Button>
      ))}
    </div>
  );
}