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

let firstNum 
let secondNum 
let operator 

let operate = function(operator, num1, num2) {
if (operator === '+') {
return add(num1, num2)
} else if (operator === '-') {
    return subtract(num1, num2)
} else if (operator === '*') {
    return multiply(num1, num2)
} else if (operator === '/') {
    if (num2 === 0) {
        console.error('Cannot divide by zero')
    }
    return divide(num1, num2)
}
}

const displayText = document.getElementById('display-text')
let displayValue = ''

function updateDisplay(e) {
    const buttonText = e.target.textContent
    displayValue += buttonText
    displayText.textContent = displayValue
    
}

const numberButtons = document.querySelectorAll('.num-btns')

numberButtons.forEach(button => {
    button.addEventListener('click', updateDisplay)
})

const plusBtn = document.getElementById('plus-btn')
const minusBtn = document.getElementById('minus-btn')
const multiplyBtn = document.getElementById('multiply-btn')
const divideBtn = document.getElementById('divide-btn')

function handleOperatorClick(event) {
    firstNum = parseFloat(displayText.textContent);
    operator = event.target.textContent;
    displayText.textContent = '';
}

plusBtn.addEventListener('click', handleOperatorClick);
minusBtn.addEventListener('click', handleOperatorClick);
multiplyBtn.addEventListener('click', handleOperatorClick);
divideBtn.addEventListener('click', handleOperatorClick);

