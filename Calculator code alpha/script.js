let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
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

    currentInput = result;
    display.value = result;
    previousInput = '';
    operator = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}
