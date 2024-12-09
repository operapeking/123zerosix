import { Calendar, Building2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ScheduleHeaderProps {
  onSearch: (query: string) => void;
}

export function ScheduleHeader({ onSearch }: ScheduleHeaderProps) {
  return (
    <div className="space-y-4 mb-8">
      <h1 className="text-3xl font-bold tracking-tight">🚅12306+</h1>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="date"
            className="pl-10"
          />
        </div>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="出发地"
            className="pl-10"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="目的地"
            className="pl-10"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <Button className="w-full md:w-24">查询</Button>
      </div>
    </div>
  );
}