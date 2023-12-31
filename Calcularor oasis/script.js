let expression = '';

function appendNumber(number) {
  expression += number;
  document.getElementById('result').value = expression;
}

function appendOperator(operator) {
  expression += operator;
  document.getElementById('result').value = expression;
}

function calculateResult() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = '';
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}

function deleteLastEntry() {
  expression = expression.slice(0, -1);
  document.getElementById('result').value = expression;
}
