let firstNum;
let secondNum;
let operator;

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