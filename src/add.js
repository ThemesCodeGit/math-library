/**
 * Performs addition operation on all parameters
 * @param {number} at least 2 numbers
 * @returns {number} Result of addion
 */
export const add = (...params) => {
  if (params.length < 2) {
    throw new Error('You should provide at least 2 arguments');
  }

  return params.reduce((accum, current) => {
    if (typeof current !== 'number') {
      throw new Error('All arguments must be numbers');
    }
    return accum + current;
  }, 0);
};
