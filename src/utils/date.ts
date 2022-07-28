export function getDay(date: Date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[date.getDay()];
}

function numberFormat(number: number) {
  return number < 10 ? `0${number}` : number;
}

export function getHourMinutes(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${numberFormat(hours)}:${numberFormat(minutes)}`;
}
