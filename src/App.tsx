import { useState } from 'react';
import { trains } from '@/data/trains';
import { ScheduleHeader } from '@/components/train-schedule/schedule-header';
import { ScheduleList } from '@/components/train-schedule/schedule-list';
import { Button } from '@/components/ui/button';
import { TrainClass } from '@/types/train';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [filteredTrains, setFilteredTrains] = useState(trains);
  const [selectedClass, setSelectedClass] = useState<TrainClass | null>(null);
  const [ticketCount, setTicketCount] = useState(1);

  const handleSearch = () => {
    const dep = departure.toLowerCase();
    const arr = arrival.toLowerCase();
    const filtered = trains.filter((train) => 
      (!dep || train.departure.station.toLowerCase().includes(dep)) &&
      (!arr || train.arrival.station.toLowerCase().includes(arr))
    );
    setFilteredTrains(filtered);
  };

  const handleBuy = () => {
    if (!selectedClass) {
      toast.error('请选择一张车票');
      return;
    }
    if (ticketCount > selectedClass.remainingTickets) {
      toast.error('票数不足');
      return;
    }
    toast.success(`${selectedClass.name} ${ticketCount}张 订票成功`);
    setSelectedClass(null);
    setTicketCount(1);
  };

  return (
    <div className="min-h-screen bg-background relative pb-20">
      <main className="container mx-auto py-8 px-4">
        <ScheduleHeader 
          onSearch={handleSearch}
          onDepartureChange={setDeparture}
          onArrivalChange={setArrival}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={filteredTrains.length}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ScheduleList 
              trains={filteredTrains} 
              selectedClass={selectedClass}
              onSelectClass={setSelectedClass}
            />
          </motion.div>
        </AnimatePresence>
      </main>
      <div className="fixed bottom-0 right-0 p-4 bg-background border-t w-full shadow-lg">
        <div className="container mx-auto flex justify-end items-center gap-4">
          {selectedClass && (
            <>
              <div className="text-lg">
                <span className="font-medium">{selectedClass.name}</span>
                <span className="mx-2">￥{(selectedClass.price * ticketCount).toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  min={1}
                  max={selectedClass.remainingTickets}
                  value={ticketCount}
                  onChange={(e) => setTicketCount(Math.min(Math.max(1, parseInt(e.target.value) || 1), selectedClass.remainingTickets))}
                  className="w-20"
                />
                <span className="text-sm text-muted-foreground">张</span>
              </div>
            </>
          )}
          <Button 
            size="lg"
            onClick={handleBuy}
            disabled={!selectedClass}
          >
            {selectedClass ? '购买车票' : '请选择车票'}
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;