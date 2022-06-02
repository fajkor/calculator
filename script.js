/* functions of the basic math operators */
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

/* A function that takes an operator, two numbers and performs a calculation depending on the operator */
function operate(operator, a, b) {
  if(operator === `+`) {
    return add(a, b);
  } else if(operator === `-`) {
    return subtract(a, b);
  } else if(operator === `*`) {
    return multiply(a, b);
  } else {
    return divide(a, b);
  }
}