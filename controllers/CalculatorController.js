export default class CalculatorController {

  deal(item, result, textCalculator) {
    if (result) {
      switch (item) {
        case '+': return;
        case '*': return;
        case '-': return;
        case '/': return;
        case '<': return;
        case '=': return;
        default: return ({
          textCalculator: item,
          result: false
        });
      }

    } else {
      let a, result;

      switch (item) {
        case '<': a = textCalculator && textCalculator.length > 1 ? textCalculator.slice(0, -1) : ''; break;
        case '=': if (this.verifySyntax(textCalculator)) {
          a = eval(textCalculator);
          if (!a) {
            a = 'Syntax error';
          }
        } else {
          a = 'Syntax error';
        }
          result = true;
          break;
        default: a = textCalculator + '' + item; result = false; break;
      }

      return ({
        textCalculator: a,
        result: result
      });
    }
  }

  verifySyntax(textCalculator) {
    let lastChar = textCalculator[textCalculator.length - 1];
    switch (lastChar) {
      case '+': return false;
      case '*': return false;
      case '-': return false;
      case '/': return false;
      case '<': return false;
      case '=': return false;
      default: return true;
    }
  }
}