import { useState, useMemo } from 'react';
import { trains } from '@/data/trains';
import { ScheduleHeader } from '@/components/train-schedule/schedule-header';
import { ScheduleList } from '@/components/train-schedule/schedule-list';
import { Button } from '@/components/ui/button';
import { TrainClass } from '@/types/train';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<TrainClass | null>(null);

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
    toast.success(`${selectedClass.name} 订票成功`);
    setSelectedClass(null);
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
      <div className="fixed bottom-0 right-0 p-4 bg-background border-t w-full">
        <div className="container mx-auto flex justify-end items-center gap-4">
          {selectedClass && (
            <div className="text-lg">
              <span className="font-medium">{selectedClass.name}</span>
              <span className="mx-2">￥{selectedClass.price.toFixed(2)}</span>
            </div>
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