export default function TimeExtractor(){
    const now = new Date();
    const hours = now.getHours() % 12 || 12; // Converts to 12-hour format and handles 0 as 12
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Ensures minutes are always two digits
    const period = now.getHours() < 12 ? 'am' : 'pm';

    return `${hours}:${minutes} ${period}`;
}