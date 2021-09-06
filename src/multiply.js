import createMathOperation from './helpers/createMathOperation';

/**
 * Performs multiplication with given parameters
 * @param {number} a - multiplicand
 * @param {number} b - multiplier
 * @returns {number} Product of multiplication
 */
export const multiply = createMathOperation((a, b) => a * b, 0);
