let firstNum = null;
let secondNum = null;
let operator = null;
let clearDisplay = true;

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
        if(firstNum !== null && clearDisplay) {
            display('');
            clearDisplay = false;
        }
        display(calcScreen.textContent + keyPressed);
    } else if(keyPressed == '.') {
        if(!valueDisplayed.includes('.')) display(valueDisplayed + keyPressed);
    } else if(keyPressed == 'DEL') {
        display(valueDisplayed ? valueDisplayed.slice(0, valueDisplayed.length - 1) : valueDisplayed);
        firstNum = calcScreen.textContent;
    } else if(keyPressed == 'AC') {
        display('');
        firstNum = null;
        secondNum = null;
        operator = null;
    } else if(keyPressed == '+' || keyPressed == '-' || keyPressed == '*' || keyPressed == '/' || keyPressed == '=') {
        if (display.textContent !== '') {
            if (firstNum !== null && operator !== null) {
                if (secondNum === null) {
                    if(operator === '=') {
                        operator = keyPressed;
                    } else {
                        secondNum = Number(valueDisplayed);
                        firstNum = operate(operator, firstNum, secondNum); //
                        operator = keyPressed;
                        display(firstNum);
                        clearDisplay = true;
                        if(keyPressed == '=') {
                            secondNum = null;
                        }
                    }
                } else {
                    secondNum = Number(valueDisplayed);
                    firstNum = operate(operator, firstNum, secondNum); //
                    operator = keyPressed;
                    display(firstNum);
                    clearDisplay = true;
                    if(keyPressed == '=') {
                        secondNum = null;
                    }
                }
            } else {
                firstNum = Number(valueDisplayed);
                operator = keyPressed;
                clearDisplay = true;
            }
        }
    } else if(keyPressed == '%') {
        //console.log('%');
    } else if(keyPressed == '+/-') {
        console.log('+/-');
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