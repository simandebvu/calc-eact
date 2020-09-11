import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const plus = '+';
  const minus = '-';
  const times = 'X';
  const divide = '/';
  const mNumberOne = Big(numberOne || '0');
  const mNumberTwo = Big(numberTwo || '0');
  switch (operation) {
    case plus:
      return mNumberOne.plus(mNumberTwo).toString();
    case minus:
      return mNumberOne.minus(mNumberTwo).toString();
    case times:
      return mNumberOne.times(mNumberTwo).toString();
    case divide:
      // eslint-disable-next-line eqeqeq
      if (mNumberTwo == '0') {
        return 'Cant divide by 0!';
      }
      return mNumberOne.div(mNumberTwo).toString();

    default:
      throw new Error(`Invalid Operator: ${operation}`);
  }
}
