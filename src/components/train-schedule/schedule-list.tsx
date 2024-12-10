import { Train, TrainClass } from '@/types/train';
import { TrainCard } from './train-card';

interface ScheduleListProps {
  trains: Train[];
  selectedClass: TrainClass | null;
  onSelectClass: (trainClass: TrainClass | null) => void;
}

export function ScheduleList({ trains, selectedClass, onSelectClass }: ScheduleListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {trains.map((train) => (
        <TrainCard 
          key={train.id} 
          train={train} 
          selectedClass={selectedClass}
          onSelectClass={onSelectClass}
        />
      ))}
    </div>
  );
}