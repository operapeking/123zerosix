import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Stop } from '@/types/train';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TimeDisplay } from './time-display';

interface StopsTableProps {
  stops: Stop[];
  departureStation: string;
  arrivalStation: string;
}

export function StopsTable({ stops, departureStation, arrivalStation }: StopsTableProps) {
  const departureIndex = stops.findIndex(stop => stop.station === departureStation);
  const arrivalIndex = stops.findIndex(stop => stop.station === arrivalStation);

  const isStopInRoute = (index: number) => {
    return index >= departureIndex && index <= arrivalIndex;
  };

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2 flex items-center gap-2">
        <Clock className="h-4 w-4" />
        停靠站
      </h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>站名</TableHead>
            <TableHead>到站时间</TableHead>
            <TableHead>出发时间</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stops.map((stop, index) => (
            <TableRow 
              key={index}
              className={cn(!isStopInRoute(index) && "text-muted-foreground")}
            >
              <TableCell className="font-medium">{stop.station}</TableCell>
              <TableCell>
                <TimeDisplay time={stop.arrival} />
              </TableCell>
              <TableCell>
                <TimeDisplay time={stop.departure} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}