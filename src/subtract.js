import createMathOperation from './helpers/createMathOperation';

/**
 * Performs subtraction with given parameters
 * @param {number} a - subtrahend
 * @param {number} b - minuend
 * @returns {number} Result of subtraction
 */
export const subtract = createMathOperation((a, b) => a - b, 0);
