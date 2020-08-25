function solve() {
    let regex = /[\+\-\*\/]/;
    let operator;
    let sum = 0;
    let leftNumbers = '';
    let rightNumbers = '';
    /* let isLogged = false; */

    let buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach(button => {
        if (Number(button.value) >= 0 && Number(button.value) <= 9) {
            button.classList.add("number");
        } else if (regex.test(button.value)) {
            button.classList.add("operator");
        } else if (button.value === '=') {
            button.classList.add("equals");
        } else if (button.value === '.') {
            button.classList.add("separator");
        }
    });

    let expressionOutput = document.querySelector("#expressionOutput");
    let resultOutput = document.querySelector("#resultOutput");

    let operandBtns = Array.from(document.querySelectorAll(".number"));
    let operatorBtns = Array.from(document.querySelectorAll(".operator"));
    let equals = document.querySelector(".equals");
    let separator = document.querySelector(".separator");
    let clear = document.querySelector(".clear");

    operandBtns.forEach(operand => {
        operand.addEventListener("click", function (e) {
            expressionOutput.textContent += operand.value;
            if (!regex.test(expressionOutput.textContent)) {
                leftNumbers += operand.value;
                /* console.log(leftNumbers); */
            } else {
                let indexAfterEqualAndSpace = expressionOutput.textContent.indexOf(operator)+1;
                /* console.log(indexAfterEqualAndSpace); */
                rightNumbers = expressionOutput.textContent.slice(indexAfterEqualAndSpace).trim();
                /* console.log(rightNumbers); */
            }
        });
    });

    let operatorLogged = false;

    operatorBtns.forEach(operatorBtn => {
        operatorBtn.addEventListener("click", function (e) {
            if (/\d/g.test(expressionOutput.textContent) && operatorLogged === false) {
                expressionOutput.textContent += ` ${operatorBtn.value} `;
                operatorLogged = true;
                operator = operatorBtn.value;
            }
        });
    });

    equals.addEventListener("click", function (e) {
        if (rightNumbers.length === 0) {
            resultOutput.textContent += NaN;
        } else {
            /* console.log(sum); */
            leftNumbers = Number(leftNumbers);
            /* console.log(leftNumbers); */
            rightNumbers = Number(rightNumbers);
            /* console.log(rightNumbers); */
            /* console.log(operator); */
            switch (operator) {
                case '+': sum = leftNumbers + rightNumbers; break;
                case '-': sum = leftNumbers - rightNumbers; break;
                case '*': sum = leftNumbers * rightNumbers; break;
                case '/': sum = leftNumbers / rightNumbers; break;
                default: return;
            }
            /* console.log(sum); */
            resultOutput.textContent += sum;
        }
    });

    separator.addEventListener("click", function (e) {
        if (!leftNumbers.includes('.')) {
            leftNumbers += '.';
            expressionOutput.textContent += '.';
        }

        if (!rightNumbers.includes('.') && rightNumbers.length > 0) {
            rightNumbers += '.';
            expressionOutput.textContent += '.';
        }
    });

    clear.addEventListener("click", function (e) {
        expressionOutput.textContent = '';
        resultOutput.textContent = '';
        operatorLogged = false;
        sum = 0;
        leftNumbers = '';
        rightNumbers = '';
    });
}