import createMathOperation from './helpers/createMathOperation';

/**
 * Performs addition operation on all parameters
 * @param {number} at least 2 numbers
 * @returns {number} Result of addion
 */
export const add = createMathOperation((a, b) => a + b, 0);
