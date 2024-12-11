import { useState, useMemo } from 'react';
import { trains } from '@/data/trains';
import { ScheduleHeader } from '@/components/train-schedule/schedule-header';
import { ScheduleList } from '@/components/train-schedule/schedule-list';
import { Button } from '@/components/ui/button';
import { TrainClass } from '@/types/train';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { Input } from '@/components/ui/input';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<TrainClass | null>(null);
  const [ticketCount, setTicketCount] = useState(1);

  const filteredTrains = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return trains.filter((train) => 
      train.number.toLowerCase().includes(query) ||
      train.departure.station.toLowerCase().includes(query) ||
      train.arrival.station.toLowerCase().includes(query)
    );
  }, [searchQuery]);

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
        <ScheduleHeader onSearch={setSearchQuery} />
        <ScheduleList 
          trains={filteredTrains} 
          selectedClass={selectedClass}
          onSelectClass={setSelectedClass}
        />
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