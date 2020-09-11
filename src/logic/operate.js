import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const plus = '+';
  const minus = '-';
  const times = 'X';
  const divide = '/';
  const modulo = '%';
  const mNumberOne = Big(numberOne);
  const mNumberTwo = Big(numberTwo);
  switch (operation) {
    case plus:
      return mNumberOne.plus(mNumberTwo);
    case minus:
      return mNumberOne.minus(mNumberTwo);
    case times:
      return mNumberOne.times(mNumberTwo);
    case divide:
      return mNumberOne.div(mNumberTwo);
    case modulo:
      return mNumberOne.mod(mNumberTwo);

    default:
      throw new Error('Invalid Operation!');
  }
}
