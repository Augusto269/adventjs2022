const countHours = (year, holidays) => {
  if (typeof year !== 'number') throw new TypeError('Invalid input, the year must be an number');
  if (!Array.isArray(holidays) || holidays.length === 0)
    throw new TypeError('Invalid input, the holidays must be an array');
  let extraHours = 0;
  for (const holiday of holidays) {
    const dateMMYY = holiday.split('/');
    const date = new Date(`${year}-${dateMMYY[0]}-${dateMMYY[1]}`);
    if (date.getDay() !== 6 && date.getDay() !== 7 && date.getDay() !== 0) {
      extraHours += 2;
    }
  }
  return extraHours;
};

module.exports = { countHours };
