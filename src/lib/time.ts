export function calculateTimeDifference(departure: string, arrival: string): { hours: string; plusDays: number } {
  const [depHours, depMinutes] = departure.split(':').map(Number);
  const [arrHours, arrMinutes] = arrival.split(':').map(Number);
  
  let diffMinutes = arrMinutes - depMinutes;
  let diffHours = arrHours - depHours;
  let plusDays = Math.floor(diffHours / 24);
  
  // Normalize hours to 24-hour format for display
  diffHours = diffHours % 24;
  
  if (diffMinutes < 0) {
    diffMinutes += 60;
    diffHours -= 1;
    if (diffHours < 0) {
      diffHours += 24;
      plusDays -= 1;
    }
  }
  
  return {
    hours: `${String(diffHours).padStart(2, '0')} 时 ${String(diffMinutes).padStart(2, '0')} 分`,
    plusDays
  };
}

export function formatDisplayTime(time: string): { displayTime: string; plusDays: number } {
  const [hours, minutes] = time.split(':').map(Number);
  const plusDays = Math.floor(hours / 24);
  const displayHours = hours % 24;
  
  return {
    displayTime: `${String(displayHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`,
    plusDays
  };
}