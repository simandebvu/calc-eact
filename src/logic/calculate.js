import Big from 'big.js';
import Operate from './operate';

export default function calculate(data, buttonName) {
  const plusMinus = '+/-';
  const mod = '%';
  const equals = '=';
  const allClear = 'AC';
  const dec = '.';

  switch (buttonName) {
    case plusMinus:
      if (data.next) {
        return { next: (-1 * parseFloat(data.next)).toString() };
      }
      if (data.total) {
        return { total: (-1 * parseFloat(data.total)).toString() };
      }
      break;
    case mod:
      if (data.next && data.operation) {
        const result = Operate(data.total, data.next, data.operation);
        return {
          total: Big(result).div(Big('100')).toString(),
          next: null,
          operation: null,
        };
      }
      if (data.next) {
        return {
          next: Big(data.next)
            .div(Big('100')).toString(),
        };
      }
      return {};
    case equals:
      if (data.next && data.operation) {
        return {
          total: Operate(data.total, data.next, data.operation),
          next: null,
          operation: null,
        };
      }
      return {};
    case allClear:
      return {
        total: null,
        next: null,
        operation: null,
      };
    case dec:
      if (data.next) {
        if (data.next.includes('.')) {
          return {};
        }
        return { next: `${data.next}.` };
      }
      return { next: '0.' };
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
      if (data.next === '0' && buttonName === '0') {
        return {};
      }
      if (data.operation) {
        if (data.next) {
          return { next: data.next + buttonName };
        }
        return { next: buttonName };
      }
      if (data.next) {
        const next = data.next === '0' ? buttonName : data.next + buttonName;
        return {
          next,
          total: null,
        };
      }
      return {
        next: buttonName,
        total: null,
      };

    default:
      if (data.operation) {
        return {
          total: Operate(data.total, data.next, data.operation),
          next: null,
          operation: buttonName,
        };
      }
      if (!data.next) {
        return { operation: buttonName };
      }
      return { total: data.next, next: null, operation: buttonName };
  }

  return { total: data.next, next: null, operation: buttonName };
}
