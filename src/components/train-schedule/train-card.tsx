import { useState } from 'react';
import { Train, TrainClass } from '@/types/train';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ClassSelector } from './class-selector';
import { StopsTable } from './stops-table';
import { Train as TrainIcon, ArrowRight, Clock, Building2, ChevronDown, ChevronUp } from 'lucide-react';

interface TrainCardProps {
  train: Train;
  selectedClass: TrainClass | null;
  onSelectClass: (trainClass: TrainClass | null) => void;
}

export function TrainCard({ train, selectedClass, onSelectClass }: TrainCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrainIcon className="h-5 w-5 text-primary" />
            <span className="font-semibold">{train.number}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-muted-foreground"
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center mb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{train.departure.station}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{train.departure.time}</span>
            </div>
          </div>

          <ArrowRight className="h-5 w-5 text-muted-foreground" />

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{train.arrival.station}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{train.arrival.time}</span>
            </div>
          </div>
        </div>

        <ClassSelector
          classes={train.classes}
          selectedClass={selectedClass}
          onSelect={onSelectClass}
        />

        {isExpanded && (
          <StopsTable 
            stops={train.stops} 
            departureStation={train.departure.station}
            arrivalStation={train.arrival.station}
          />
        )}
      </CardContent>
    </Card>
  );
}