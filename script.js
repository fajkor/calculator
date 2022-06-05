const leftSideContainer = document.querySelector(`#leftSideContainer`);
const rightSideContainer = document.querySelector(`#rightSideContainer`);

/* Create left side buttons, append them, add text and class to each one of them */
/* let leftSideButtons = createButtons(15);
leftSideButtons.map((button, index) => {
  leftSideContainer.appendChild(button);

  if(index === 3 || index === 4 || index === 5) {
    button.textContent = `${index + 4}`;
    button.classList.add(`${index + 4}`);
  } else if (index === 6 || index === 7 || index === 8) {
    button.textContent = `${index - 2}`;
    button.classList.add(`${index - 2}`);
  } else if (index === 9 || index === 10 || index === 11) {
    button.textContent = `${index - 8}`;
    button.classList.add(`${index - 8}`);
  }

  switch(index) {
    case 0:
      button.textContent = `del.`;
      button.classList.add(`del.`);
      break;
    case 1:
      button.textContent = `/`;
      button.classList.add(`/`);
      break;
    case 2:
      button.textContent = `*`;
      button.classList.add(`*`);
      break;
    case 12:
      button.textContent = `clear`;
      button.classList.add(`clear`);
      break;
    case 13:
      button.textContent = `0`;
      button.classList.add(`0`);
      break;
    case 14:
      button.textContent = `.`;
      button.classList.add(`.`);
      break;
  }
}); */

/* Create right side buttons, append them, add text and class to each one of them */
/* let rightSideButtons = createButtons(3);
rightSideButtons.map((button, index) => {
  rightSideContainer.appendChild(button);
  if (index === 0) {
    button.textContent = `-`;
    button.classList.add(`-`);
  } else if (index === 1) {
    button.textContent = `+`;
    button.classList.add(`+`);
  } else {
    button.textContent = `enter`;
    button.classList.add(`enter`);
  }
}); */


/* create a function that returns an array of buttons */
/* function createButtons(numberOfButtons) {
  let buttonsArray = [];
  for(let i = 0; i < numberOfButtons; i++) {
    let buttons = document.createElement(`button`);
    buttonsArray.push(buttons);
  }
  return buttonsArray;
}
 */
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