const p = document.querySelector(`p`);
const numberArray = Array.from(document.querySelectorAll(`.number`));
const operatorArray = Array.from(document.querySelectorAll(`.operator`));
const enter = document.querySelector(`.enter`);
let displayValueOne, displayValueTwo, operator;

/* When a number gets clicked show it on the display and update displayValue */
numberArray.map(number => {
  number.addEventListener(`click`, () => {
    number.classList.add(`numberClicked`); /* I add the class so I know which number has been clicked */
      populateDisplay();
  });
});

/* When an operator gets clicked show it on the display and update displayValue */
operatorArray.map(operator => {
  operator.addEventListener(`click`, () => {
    if(p.textContent === `######`){
      operator.classList.add(`firstTimeClicked`);
      showOperator();
    } else {
      displayValueOne = +p.textContent;
      operator.classList.add(`operatorClicked`); /* I add the class so I know which operator has been clicked */
      showOperator();
    }
  });
});

enter.addEventListener(`click`, () => {
  displayValueTwo = +p.textContent;
  p.textContent = operate(operator, displayValueOne, displayValueTwo);
})

/* A function to populate the display of the calculator */
function populateDisplay() {
    /* An if statement to check if a number button has been clicked */
    /* Every time a number button gets clicked, a class='numberClicked' gets added to it.
    All we need to do is check if that class exists */
    if(document.querySelector(`.numberClicked`)) { /* if class='numberClicked' exists */
      let numberClicked = document.querySelector(`.numberClicked`);
      if(p.textContent === `######`) {
        p.textContent = numberClicked.textContent;
      } else if(document.querySelector(`.firstTimeClicked`)) { /* I need here to check if a plus or minus operator (-, +) is shown on the display. */
          p.textContent += numberClicked.textContent;
      } else if(p.textContent.includes(`+`) || p.textContent.includes(`-`) || p.textContent.includes(`/`) || p.textContent.includes(`*`)) {
        /* Here the display is updated with the second number. */
        p.textContent = numberClicked.textContent;
      } else { /* This "else" clause updates the display with the first value we give to the calculator, if the number has more than 1 digits. */
        p.textContent += numberClicked.textContent;
      }
      numberClicked.classList.remove(`numberClicked`); /* !Important! numberClicked class, needs to be removed. It served its purpose. Now this same class needs to be added to another number button (or to the same). */
    } 
    return p.textContent;
  }

  function showOperator() {
    if (document.querySelector(`.operatorClicked`)) {
      let operatorClicked = document.querySelector(`.operatorClicked`);
      p.textContent = p.textContent + ` ` + operatorClicked.textContent;
      operator = operatorClicked.textContent;
      operatorClicked.classList.remove(`operatorClicked`);
      if(document.querySelector(`.firstTimeClicked`)) {
        document.querySelector(`.firstTimeClicked`).classList.remove(`firstTimeClicked`);
      }
    } else {
      let firstTimeClicked = document.querySelector(`.firstTimeClicked`);
      p.textContent = firstTimeClicked.textContent;
    }
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