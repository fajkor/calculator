const p = document.querySelector(`p`);
const numberArray = Array.from(document.querySelectorAll(`.number`));
const operatorArray = Array.from(document.querySelectorAll(`.operator`));
const enter = document.querySelector(`.enter`);
let displayValueOne, displayValueTwo, operator;

/* When a number gets clicked show it on the display and update displayValue */
numberArray.map(number => {
  number.addEventListener(`click`, () => {
    number.classList.add(`numberClicked`); /* I add the class numberClicked so I know which number has been clicked */
      populateDisplay();
  });
});

/* When an operator gets clicked show it on the display and update displayValue */
operatorArray.map(operator => {
  operator.addEventListener(`click`, () => {
    if(p.textContent === `######`){ /* If an operator is clicked before even any other number is clicked, then the class .firstTimeClicked is added. */
      operator.classList.add(`firstTimeClicked`);
      showOperator();
    } else { /* If an operator is clicked after a number has been clicked. */
      displayValueOne = +p.textContent; /* Important! First, I need to save the value of that number in a variable declared outside this arrow function. */
      operator.classList.add(`operatorClicked`); /* I add the class so I know which operator has been clicked */
      showOperator();
    }
  });
});

enter.addEventListener(`click`, () => {
  displayValueTwo = +p.textContent; /* Important! Store the value of the display inside a variable declared outside this function. */
  p.textContent = operate(operator, displayValueOne, displayValueTwo);
})

/* A function to populate the display of the calculator */
function populateDisplay() {
    /* Below we have an if statement to check if a number button has been clicked */
    /* Every time a number button gets clicked, a class='numberClicked' gets added to it.
    All we need to do is check if that class exists */
    if(document.querySelector(`.numberClicked`)) { /* if class='numberClicked' exists */
      let numberClicked = document.querySelector(`.numberClicked`);
      if(p.textContent === `######`) {
        p.textContent = numberClicked.textContent;
      } else if(document.querySelector(`.firstTimeClicked`)) { /* I need here to check if a plus or minus operator (-, +) is shown on the display. This only happens when class .firstTimeClicked exists. */
          p.textContent += numberClicked.textContent;
      } else if(p.textContent.includes(`+`) || p.textContent.includes(`-`) || p.textContent.includes(`/`) || p.textContent.includes(`*`)) { /* Here I check if an operator exists along with other numbers the user has entered. If it does, then the display is updated with the second number. */
        p.textContent = numberClicked.textContent;
      } else { /* This "else" clause updates the display with the first (or the second) value we give to the calculator, if the number has more than 1 digit. */
        p.textContent += numberClicked.textContent;
      }
      numberClicked.classList.remove(`numberClicked`); /* !Important! numberClicked class, needs to be removed. It served its purpose. Now this same class needs to be added again (if needed) to another number button (or to the same). */
    } 
  }

  function showOperator() {
    if (document.querySelector(`.operatorClicked`)) { /* If user clicks an operator, after entering a number. */
      let operatorClicked = document.querySelector(`.operatorClicked`);
      p.textContent = p.textContent + ` ` + operatorClicked.textContent; /* Update display. */
      operator = operatorClicked.textContent; /* Important! Here I save the operator in a variable declared outside this function. */
      operatorClicked.classList.remove(`operatorClicked`);
      if(document.querySelector(`.firstTimeClicked`)) { /* If the user has clicked on an operator before clicking on a number, it means that we have the class .firstTimeClicked. Here, it's the time and place to remove this class. */
        document.querySelector(`.firstTimeClicked`).classList.remove(`firstTimeClicked`);
      }
    } else { /* This "else" clause is executed only if class .firstTimeClicked exists. */
      let firstTimeClicked = document.querySelector(`.firstTimeClicked`);
      p.textContent = firstTimeClicked.textContent; /* Display gets updated with an operator (+,-, *, /) */
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