let firstNum;
let secondNum;
let operator;

const keyPad = document.querySelector('.keypad');
const expressionDisplay = document.querySelector('.expression-row');
const answerDisplay = document.querySelector('.answer-row')

const buttonGrid = ['AC', 'DEL', '%', '/',
                    '7', '8', '9', '*',
                    '4', '5', '6', '-',
                    '1', '2', '3', '+',
                    '0', '.', '+/-', '='];




const add = function(firstNum, secondNum) {
    return firstNum + secondNum;
}

const subtract = function(firstNum, secondNum) {
    return firstNum - secondNum;
}

const multiply = function(firstNum, secondNum) {
    return firstNum * secondNum;
}

const divide = function(firstNum, secondNum) {
    return firstNum / secondNum;
}


const operate = function(operator, firstNum, secondNum) {
    if(operator == '+') {
        return add(firstNum, secondNum);
    } else if(operator == '-') {
        return subtract(firstNum, secondNum);
    } else if(operator == '*') {
        return multiply(firstNum, secondNum);
    } else if(operator == '/') {
        return divide(firstNum, secondNum);
    }
    return 'ERROR!'
}

const display = function(key, displayOn) {
    if(displayOn == 'exp') {
        expressionDisplay.textContent = expressionDisplay.textContent + key;
    } else {
        answerDisplay.textContent = `Ans:${key}`;
    }
}

const calc = function(event) {
    display(event.target.innerText, 'exp');
}

buttonGrid.forEach(button => {
    let key = document.createElement('button');
    key.classList.add('key');
    key.id = `key${button}`;
    key.textContent = button;
    key.addEventListener('click', calc);
    keyPad.appendChild(key);
});