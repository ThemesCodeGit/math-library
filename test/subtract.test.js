import { subtract } from '../src';

describe('subtract tests', () => {
  test('returns 0 without arguments', () => {
    expect(subtract()).toBe(0);
  });
  test('should subtract two numbers', () => {
    expect(subtract(6, 4)).toBe(2);
    expect(subtract(-6, 4)).toBe(-10);
    expect(subtract(-6, -4)).toBe(-2);
  });
});
