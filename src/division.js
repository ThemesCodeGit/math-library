import createMathOperation from './helpers/createMathOperation';

/**
 * Performs division with given parameters
 * @param {number} a - dividend
 * @param {number} b - divisor
 * @returns {number} quotient
 */
export const division = createMathOperation((a, b) => a / b, 1);
