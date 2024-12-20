import { Calendar, Building2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ScheduleHeaderProps {
  onSearch: () => void;
  onDepartureChange: (value: string) => void;
  onArrivalChange: (value: string) => void;
}

export function ScheduleHeader({ onSearch, onDepartureChange, onArrivalChange }: ScheduleHeaderProps) {
  return (
    <div className="space-y-4 mb-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/China_Railways.svg"
            className="h-12 w-12"
          />
          <span>12306</span>
        </h1>
        <p className="text-muted-foreground">交通强国，铁路先行</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <motion.div
          className="relative"
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="date"
            className="pl-10"
          />
        </motion.div>
        <motion.div
          className="relative"
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="出发地"
            className="pl-10"
            onChange={(e) => onDepartureChange(e.target.value)}
          />
        </motion.div>
        <motion.div
          className="relative"
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="目的地"
            className="pl-10"
            onChange={(e) => onArrivalChange(e.target.value)}
          />
        </motion.div>
        <Button
          className="w-full md:w-24"
          onClick={onSearch}
        >
          查询
        </Button>
      </div>
    </div>
  );
}