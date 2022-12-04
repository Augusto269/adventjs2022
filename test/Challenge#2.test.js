const { countHours } = require('../adventJS/Challenge#2');
describe('test likes challenge', () => {
  test('Return 4', () => {
    try {
      const year = 2022;
      const holidays = ['01/06', '04/01', '12/25']; // format MM/DD
      const Point = countHours(year, holidays);
      expect(Point).toBe(4);
    } catch (err) {}
  });

  test('Must return 10', () => {
    try {
      const year = 1985;
      const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'];
      const Point = countHours(year, holidays);
      expect(Point).toBe(10);
    } catch (err) {}
  });
});
