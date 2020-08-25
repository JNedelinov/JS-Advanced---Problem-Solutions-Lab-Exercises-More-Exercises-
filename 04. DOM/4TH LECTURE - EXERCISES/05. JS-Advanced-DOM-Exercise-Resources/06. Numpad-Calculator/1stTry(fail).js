    /*     buttons.forEach(button => {
            button.addEventListener("click", function (e) {
                if (button.value === 'Clear') {
                    document.querySelector("#expressionOutput").textContent = '';
                    document.querySelector("#resultOutput").textContent = '';
                    isLogged = false;
                } else if (Number(button.value) >= 0 && Number(button.value) <= 9) {
                    if (leftNumbers.toString().length > 0 && regex.test(document.querySelector("#expressionOutput").textContent)) {
                        document.querySelector("#expressionOutput").textContent += button.value;
                        let index = document.querySelector("#expressionOutput").textContent.indexOf(operator);
                        rightNumbers = Number(document.querySelector("#expressionOutput").textContent.slice(index + 1));
                    } else {
                        document.querySelector("#expressionOutput").textContent += button.value;
                    }
                } else if (regex.test(button.value) && !isLogged) {
                    operator = regex.exec(button.value)[0];
                    leftNumbers = Number(document.querySelector("#expressionOutput").textContent);
                    if (leftNumbers.toString().length > 0) {
                        document.querySelector("#expressionOutput").textContent += ' ';
                        document.querySelector("#expressionOutput").textContent += operator + ' ';
                    }
                    isLogged = true;
                } else if (button.value === '=') {
                    if (leftNumbers.toString().length > 0 &&
                        regex.test(document.querySelector("#expressionOutput").textContent) &&
                        rightNumbers.toString().length > 0) {
                        console.log(leftNumbers);
                        console.log(rightNumbers);
                        switch (operator) {
                            case '+': sum = leftNumbers + rightNumbers; break;
                            case '-': sum = leftNumbers - rightNumbers; break;
                            case '*': sum = leftNumbers * rightNumbers; break;
                            case '/': sum = leftNumbers / rightNumbers; break;
                        }
                        document.querySelector("#resultOutput").textContent = sum;
                    } else {
                        console.log('2323');
                    }
                }
            });
        }) */