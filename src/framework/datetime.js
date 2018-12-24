export function currentDate(date = new Date()) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
}

export function equalDates(d1, d2) {
  return d1[0] === d2[0] && d1[1] === d2[1] && d1[2] === d2[2];
}

export function isCurrentDate(date) {
  return equalDates(currentDate(), date);
}

const SHORT_MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
export function formatDate(date) {
  return `${SHORT_MONTHS[date[1] - 1]} ${date[2]}`;
}
