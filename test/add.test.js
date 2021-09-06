import { add } from '../src';

describe('addition', () => {
  test('returns 0 without arguments', () => {
    expect(add());
  });
  test('returns correct value with correct arguments', () => {
    expect(add(2, 2)).toBe(4);
    expect(add(2, -2)).toBe(0);
    expect(add(-2, -2)).toBe(-4);
  });
});
