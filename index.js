let firstNum;
let secondNum;
let operator;

const keyPad = document.querySelector('.keypad');
const calcScreen = document.querySelector('.display');

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

const display = function(key) {
    calcScreen.textContent = key;
}

const calc = function(event) {
    let keyPressed = event.target.innerText;
    let valueDisplayed = calcScreen.textContent;

    if(/^[0-9]*$/.test(keyPressed)) {
        display(valueDisplayed + keyPressed);
    } else if(keyPressed == '.') {
        if(!valueDisplayed.includes('.')) display(valueDisplayed + keyPressed);
    } else if(keyPressed == 'DEL') {
        display(valueDisplayed ? valueDisplayed.slice(0, valueDisplayed.length - 1) : valueDisplayed);
    } else if(keyPressed == 'AC') {
        display('');
        firstNum = null;
        secondNum = null;
        operator = null;
    }
}

buttonGrid.forEach(button => {
    let key = document.createElement('button');
    key.classList.add('key');
    key.id = `key${button}`;
    key.textContent = button;
    key.addEventListener('click', calc);
    keyPad.appendChild(key);
});