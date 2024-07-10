// Variables to store current and previous operand, and the operation
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

// Function to append number to the current operand
function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

// Function to choose the operation
function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

// Function to compute the result
function compute() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

// Function to clear the display
function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

// Function to update the display with the current operand and operation
function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = `${previousOperand} ${operation || ''} ${currentOperand}`;
}
