const wrapping = (gifts) => {
  if (!Array.isArray(gifts) || gifts.length === 0)
    throw new TypeError('Invalid input, the gifts must be an array');
  const paper = '*';
  return gifts.map((gif) => {
    const wrappingGif = `\n*${gif}*\n`;
    const wrapping = paper.repeat(gif.length + 2);
    return `${wrapping}${wrappingGif}${wrapping}`;
  });
};

module.exports = { wrapping };
