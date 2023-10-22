function getDateByDay(dayIndex: number): string {
  const date = new Date();
  const offset = date.getDay() - dayIndex;
  date.setDate(date.getDate() - offset);

  return `${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`;
}

export default getDateByDay;