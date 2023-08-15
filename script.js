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