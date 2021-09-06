export default function (operator, defaultValue) {
  return (a, b) => {
    if (a === undefined && b === undefined) {
      return defaultValue;
    }
    if (a !== undefined && b === undefined) {
      return a;
    }
    if (b !== undefined && a === undefined) {
      return b;
    }
    return operator(a, b);
  };
}
