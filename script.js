const add = function(a, b) {
return a + b
}

const subtract = function(a, b) {
return a - b
}

const multiply = function(a, b) {
    return a * b
}

const divide = function(a, b) {
    return a / b
}

const numberButtons = document.querySelectorAll('.num-btns')
const plusBtn = document.getElementById('plus-btn')
const minusBtn = document.getElementById('minus-btn')
const multiplyBtn = document.getElementById('multiply-btn')
const divideBtn = document.getElementById('divide-btn')
const equalsBtn = document.getElementById('equals-btn')
const clearBtn = document.getElementById('clear-btn')
const decimalBtn = document.getElementById('decimal-btn')
const displayText = document.getElementById('display-text')

let displayValue = ''

let firstNum 
let secondNum 
let operator 

plusBtn.addEventListener('click', handleOperatorClick);
minusBtn.addEventListener('click', handleOperatorClick);
multiplyBtn.addEventListener('click', handleOperatorClick);
divideBtn.addEventListener('click', handleOperatorClick);
equalsBtn.addEventListener('click', handleEqualsClick)

decimalBtn.addEventListener('click', function() {
    if (!displayText.textContent.includes('.')) {
displayValue += '.'
displayText.textContent = displayValue
    }
})

let operate = function(operator, num1, num2) {
if (operator === '+') {
return add(num1, num2)
} else if (operator === '-') {
    return subtract(num1, num2)
} else if (operator === 'x') {
    return multiply(num1, num2)
} else if (operator === '/') {
    if (num2 === 0) {
        console.error('Cannot divide by zero')
    }
    return divide(num1, num2)
}
}

function updateDisplay(e) {
    const buttonText = e.target.textContent
    displayValue += buttonText
    displayText.textContent = displayValue
    
}

numberButtons.forEach(button => {
    button.addEventListener('click', updateDisplay)
})

clearBtn.addEventListener('click', function() {
displayText.textContent = ''
displayValue = ''
firstNum = null;
secondNum = null;
operator = null;
})

function handleOperatorClick(event) {
    if (firstNum && displayText.textContent && operator) {
        secondNum = parseFloat(displayText.textContent);
        let result = operate(operator, firstNum, secondNum);
        displayText.textContent = result;
        firstNum = result;
    } else if (!firstNum) {
        firstNum = parseFloat(displayText.textContent);
    }
    operator = event.target.textContent;
    displayText.textContent = '';
    displayValue = ''; 
}


function handleEqualsClick() {
    if (firstNum && displayText.textContent && operator) {
        secondNum = parseFloat(displayText.textContent);
        let result = operate(operator, firstNum, secondNum);
        displayText.textContent = result;
        firstNum = result;
        operator = null;
    }
}


