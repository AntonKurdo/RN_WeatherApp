export const formateDate = (
  timestamp: number,
  formateConfig?: Intl.DateTimeFormatOptions,
  locale = "en"
) => {
  return new Date(timestamp * 1000).toLocaleTimeString(locale, formateConfig);
};

export const getNextDay = (num: number) => {
  let day = new Date();
  let nextDay = new Date(day);
  nextDay.setDate(day.getDate() + num);
  return nextDay;
};

export const getDistanceBetweenDates = (dateOne: number, dateTwo: number) => {
  const date1 = new Date(dateOne);
  const date2 = new Date(dateTwo);
  const diffTime = Math.abs(Number(date2) - Number(date1));

  const diffSecs = Math.round(diffTime / 1000);
  const diffMins = Math.round(diffTime / (1000 * 60));
  const diffHours = Math.round(diffTime / (1000 * 60 * 60));

  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays > 0) {
    return `${diffDays} days ago`;
  }

  if (diffHours > 0) {
    return `${diffHours} hours ago`;
  }

  if (diffMins > 0) {
    return `${diffMins} minutes ago`;
  }

  if (diffSecs > 0) {
    return `${diffSecs} seconds ago`;
  }
};
