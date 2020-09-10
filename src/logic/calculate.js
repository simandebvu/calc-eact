import Operate from './operate';

export default function calculate(data, buttonName) {
  const plusMinus = '+/-';
  const mod = '%';
  const equals = '=';
  const allClear = 'AC';
  const dec = '.';

  let { total, next, operation } = data;
  switch (buttonName) {
    case plusMinus:
      if (next) {
        next = Operate(next, '-1', 'X');
      } else {
        total = Operate(total, '-1', 'X');
      }
      break;
    case mod:
      if (next) {
        total = Operate(total, next, operation);
        total = Operate(total, '100', '/');
        next = null;
        operation = null;
      } else {
        total = Operate(total, '100', '/');
      }
      break;
    case equals:
      if (next) {
        total = Operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;
    case allClear:
      if (next) {
        next = '0';
      } else if (operation) {
        operation = null;
      } else {
        total = 0;
      }
      break;
    case dec:
      if (next) {
        if (!next.includes('.')) {
          next += '.';
        }
      } else if (operation) {
        next = '0.';
      } else if (!total.includes('.')) {
        total += '.';
      }
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (next) {
        next += buttonName;
      } else if (total === '0') {
        total = buttonName;
      } else if (operation) {
        next = buttonName;
      } else {
        total += buttonName;
      }
      break;

    default:
      total = Operate(total, next, operation);
      next = null;
      operation = buttonName;
      break;
  }
  return { total, next, operation };
}
