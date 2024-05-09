var resultField = document.getElementById("result");
var currentInput = "";
var operator = "";
var firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    resultField.value = currentInput;
}

function appendOperator(op) {
    if (currentInput !== "") {
        operator = op;
        firstOperand = parseFloat(currentInput);
        currentInput = "";
    }
}

function clearResult() {
    currentInput = "";
    operator = "";
    firstOperand = null;
    resultField.value = "";
}

function calculate() {
    if (operator !== "" && currentInput !== "") {
        var secondOperand = parseFloat(currentInput);
        var result = 0;
        switch (operator) {
            case "+":
                result = firstOperand + secondOperand;
                break;
            case "-":
                result = firstOperand - secondOperand;
                break;
            case "*":
                result = firstOperand * secondOperand;
                break;
            case "/":
                if (secondOperand !== 0) {
                    result = firstOperand / secondOperand;
                } else {
                    result = "Hata: Sıfıra bölme!";
                }
                break;
        }
        
        resultField.value = result;
        currentInput = "";
        operator = "";
        firstOperand = null;
    }
}
function appendNumber(number) {
    if (number === '.') {
        if (currentInput.indexOf('.') === -1) {
            currentInput += '.';
            resultField.value = currentInput;
        }
    } else {
        currentInput += number;
        resultField.value = currentInput;
    }
}