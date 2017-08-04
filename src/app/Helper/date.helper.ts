export default class DateHelper {
  static isSameDay(prevTime, nextTime) {
    const prev = new Date(prevTime);
    const next = new Date(nextTime);
    return prev.getDate() === next.getDate() && prev.getMonth() === next.getMonth() && prev.getFullYear() === next.getFullYear();
  }

  static removeTime(dateTime) {
    const date = new Date(dateTime);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
}
