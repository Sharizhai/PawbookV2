import {  differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';
  
export function timeElapsed(date: Date): string {
    const now = new Date();
    const seconds = differenceInSeconds(now, date);
    const minutes = differenceInMinutes(now, date);
    const hours = differenceInHours(now, date);
    const days = differenceInDays(now, date);
  
    if (seconds < 60) {
        return `${seconds}s`;
    } else if (minutes < 60) {
        return `${minutes}m`;
    } else if (hours < 24) {
        return `${hours}h`;
    } else {
        return `${days}j`;
    }
}