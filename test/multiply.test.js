import { multiply } from '../src';

describe('multiply', () => {
  test('returns 0 with no arguments provided', () => {
    expect(multiply()).toBe(0);
  });
  test('returns correct value with correct arguments', () => {
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(-2, 2)).toBe(-4);
    expect(multiply(2, 0)).toBe(0);
  });
});
