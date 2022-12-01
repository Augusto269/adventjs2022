const { wrapping } = require("../adventJS/Challenge#1");
describe("test likes challenge", () => {
  test("Must throw and error", () => {
    try {
      const gifts = ['book', 'game', 'socks']
      const finalResult = wrapping(1);
    } catch (err) {
      expect(err).toBeInstanceOf(TypeError);
      expect(err).toHaveProperty("message", "Invalid input, the gifts must be an array");
    }
  });
  test("Must Return the gifts wrappers", () => {
    try {
      const gifts = ['book', 'game', 'socks']
      const finalResult = wrapping(gifts);
      expect(finalResult).toEqual([
        "******\n*book*\n******",
        "******\n*game*\n******",
        "*******\n*socks*\n*******"
      ]);
    } catch (err) {
      //Nothing here
    }
  });
});
