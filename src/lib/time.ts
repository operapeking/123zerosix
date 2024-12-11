export function calculateTimeDifference(departure: string, arrival: string): { hours: string; plusDays: number } {
    const [depHours, depMinutes] = departure.split(':').map(Number);
    const [arrHours, arrMinutes] = arrival.split(':').map(Number);
    
    let diffMinutes = arrMinutes - depMinutes;
    let diffHours = arrHours - depHours;
    let plusDays = 0;
    
    if (diffMinutes < 0) {
      diffMinutes += 60;
      diffHours -= 1;
    }
    
    while (diffHours < 0) {
      diffHours += 24;
      plusDays += 1;
    }
    
    return {
      hours: `${String(diffHours).padStart(2, '0')}:${String(diffMinutes).padStart(2, '0')}`,
      plusDays
    };
  }