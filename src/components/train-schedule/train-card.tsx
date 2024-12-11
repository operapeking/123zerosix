import { useState } from 'react';
import { Train, TrainClass } from '@/types/train';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ClassSelector } from './class-selector';
import { StopsTable } from './stops-table';
import { TrainBadge } from './train-badge';
import { Train as TrainIcon, ArrowRight, Clock, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { calculateTimeDifference } from '@/lib/time';

interface TrainCardProps {
  train: Train;
  selectedClass: TrainClass | null;
  onSelectClass: (trainClass: TrainClass | null) => void;
}

export function TrainCard({ train, selectedClass, onSelectClass }: TrainCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { hours: duration, plusDays } = calculateTimeDifference(train.departure.time, train.arrival.time);

  return (
    <Card className="hover:shadow-lg transition-shadow h-fit">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <TrainIcon className="h-5 w-5 text-primary" />
            <span className="font-semibold ml-2">{train.number}</span>
            {train.types.map((type) => (
              <TrainBadge key={type} type={type} />
            ))}
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
              {train.departure.icon ? (
                <img src={train.departure.icon} alt="" className="w-4 h-4" />
              ) : (
                <Building2 className="h-4 w-4 text-muted-foreground" />
              )}
              <span className="font-medium">{train.departure.station}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{train.departure.time}</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-1">{duration}</span>
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              {train.arrival.icon ? (
                <img src={train.arrival.icon} alt="" className="w-4 h-4" />
              ) : (
                <Building2 className="h-4 w-4 text-muted-foreground" />
              )}
              <span className="font-medium">{train.arrival.station}</span>

            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{train.arrival.time}</span>
              {plusDays > 0 && (
                <span className="text-xs text-muted-foreground">+{plusDays}天</span>
              )}
            </div>
          </div>
        </div>

        <ClassSelector
          classes={train.classes}
          selectedClass={selectedClass}
          onSelect={onSelectClass}
        />

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <StopsTable
                stops={train.stops}
                departureStation={train.departure.station}
                arrivalStation={train.arrival.station}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}