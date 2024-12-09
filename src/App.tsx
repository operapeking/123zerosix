import { useState, useMemo } from 'react';
import { trains } from '@/data/trains';
import { ScheduleHeader } from '@/components/train-schedule/schedule-header';
import { ScheduleList } from '@/components/train-schedule/schedule-list';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrains = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return trains.filter((train) => 
      train.number.toLowerCase().includes(query) ||
      train.departure.station.toLowerCase().includes(query) ||
      train.arrival.station.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-8 px-4">
        <ScheduleHeader onSearch={setSearchQuery} />
        <ScheduleList trains={filteredTrains} />
      </main>
      <Toaster />
    </div>
  );
}

export default App;