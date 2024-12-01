export function postDateFormat(date: string) {
  const today = new Date();
  const inputDay = new Date(date);

  const diffTimes = today.getTime() - inputDay.getTime();
  const diffDays = Math.floor(diffTimes / (1000 * 60 * 60 * 24));
  if (diffDays < 1) {
    const month = addZero(inputDay.getMonth() + 1);
    const day = addZero(inputDay.getDate());
    return `${day}/${month}`;
  }
  if (diffDays < 7) {
    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  }
  if (diffDays < 14) {
    return `1 week ago`;
  }
  if (diffDays < 30) {
    return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? "s" : ""} ago`;
  }
  if (diffDays < 60) {
    return `1 month ago`;
  }
  if (diffDays < 365) {
    return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? "s" : ""} ago`;
  }
  return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? "s" : ""} ago`;
}

function addZero(value: number) {
  return value < 10 ? `0${value}` : value;
}
