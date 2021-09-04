import { add } from '../src';

describe('addition tests', () => {
  test('throws and error if there are no arguments or less then 2 arguments', () => {
    expect(() => add()).toThrow('You should provide at least 2 arguments');
    expect(() => add(1)).toThrow('You should provide at least 2 arguments');
    expect(() => add(0)).toThrow('You should provide at least 2 arguments');
  });
  test('throws and error if one of the arguments is not a number', () => {
    expect(() => add(1, 2, 3, '4')).toThrow('All arguments must be numbers');
  });
  test('returns correct value with correct arguments', () => {
    expect(add(2, 2)).toBe(4);
  });
});
