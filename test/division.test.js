import { division } from '../src';

describe('division', () => {
  test('returns 1 without arguments', () => {
    expect(division()).toBe(1);
  });
  test('should division two numbers', () => {
    expect(division(4, 4)).toBe(1);
    expect(division(8, 4)).toBe(2);
    expect(division(-8, 4)).toBe(-2);
  });
});
