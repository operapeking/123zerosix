import { useState } from 'react';
import { Train, TrainClass } from '@/types/train';
import { TrainCard } from './train-card';

interface ScheduleListProps {
  trains: Train[];
}

export function ScheduleList({ trains }: ScheduleListProps) {
  const [selectedGlobalClass, setSelectedGlobalClass] = useState<TrainClass | null>(null);

  const handleClassSelect = (trainClass: TrainClass | null) => {
    setSelectedGlobalClass(trainClass === selectedGlobalClass ? null : trainClass);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {trains.map((train) => (
        <TrainCard 
          key={train.id} 
          train={train} 
          selectedGlobalClass={selectedGlobalClass}
          onSelectClass={handleClassSelect}
        />
      ))}
    </div>
  );
}