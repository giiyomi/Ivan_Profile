export default function TimeExtractor(){
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const period = now.getHours() < 12 ? 'am' : 'pm';

    return `${hours}:${minutes} ${period}`;
}