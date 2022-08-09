const p = document.querySelector(`p`);
const numberArray = Array.from(document.querySelectorAll(`.number`));
// let displayValue = p.textContent;
let operatorArray = Array.from(document.querySelectorAll(`.operator`));

/* When a number gets clicked show it on the calculator display and update displayValue with what the display shows */
numberArray.map(number => {
  number.addEventListener(`click`, () => {
    number.classList.add(`clicked`);
      populateDisplay();
    // displayValue = populateDisplay();
    // console.log(displayValue);
  });
});

operatorArray.map(operator => {
  // console.log(operator);
  operator.addEventListener(`click`, () => {
    let displayValue = +document.querySelector(`p`).textContent;
    document.querySelector(`p`).textContent = 0;
  });
});

/* A function to populate the display of the calculator and then return that value */
function populateDisplay() {
  numberArray.map(() => {
    /* An if statement to check if a button has been clicked */
    /* Every time a button gets clicked, a class='clicked' gets added to it.
    All we need to do is check if that class exists */
    if(document.querySelector(`.clicked`)) { /* if class='clicked' exists */
      if(p.textContent === `0`) {
        p.textContent = ``;
        let clicked = document.querySelector(`.clicked`);
        p.textContent += clicked.textContent;
        clicked.classList.remove(`clicked`);
      } else {
        let clicked = document.querySelector(`.clicked`);
        p.textContent += clicked.textContent;
        clicked.classList.remove(`clicked`);
      }
    }
  });
  // return +p.textContent;
}

function removeElement(parentElement, childElement) {
  parentElement.removeChild(childElement);
}

function addElement(parentElement, childElement) {
  let element = document.createElement(childElement);
  parentElement.appendChild(element);
}

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