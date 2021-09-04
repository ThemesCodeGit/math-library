/**
 * Performs subtraction with given parameters
 * @param {number} a - subtrahend
 * @param {{number} b - minuend
 * @returns {{number} Result of subtraction
 */
export const substract = (a, b) => {
  if (a === undefined || b === undefined) {
    throw new Error('You should provide 2 arguments');
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('You should provide 2 numbers as arguments');
  }
  return a - b;
};
