let firstNum;
let secondNum;
let operator;

const buttonGrid = ['AC', 'DEL', '%', '/',
                    '7', '8', '9', '*',
                    '4', '5', '6', '-',
                    '1', '2', '3', '+',
                    '0', '.', '+/-', '='];

const keyPad = document.querySelector('.keypad');
buttonGrid.forEach(button => {
    let key = document.createElement('button');
    key.id = `key${button}`;
    key.textContent = button;
    key.style.fontSize = 'large';
    key.style.fontWeight = 'bold';
    key.style.flex = 'auto';
    key.style.width = '114px';
    keyPad.appendChild(key);
});


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