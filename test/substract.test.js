import { substract } from '../src';

describe('substract tests', () => {
  test('should throw an error if there are less or more then 2 arguments', () => {
    expect(() => substract()).toThrow('You should provide 2 arguments');
    expect(() => substract(1)).toThrow('You should provide 2 arguments');
  });
  test('should throw an error if arguments are not numbers', () => {
    expect(() => substract('1', 2, 3)).toThrow(
      'You should provide 2 numbers as arguments'
    );
    expect(() => substract(1, '2')).toThrow(
      'You should provide 2 numbers as arguments'
    );
  });
  test('should substract two numbers', () => {
    expect(substract(6, 4)).toBe(2);
    expect(substract(-6, 4)).toBe(-10);
    expect(substract(-6, -4)).toBe(-2);
  });
});
