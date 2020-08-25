function subtract() {
    let divParent = document.querySelector("#wrapper");

    let valueOfFirstInput = Number(divParent.querySelector("#firstNumber").value);
    let valueOfSecondInput = Number(divParent.querySelector("#secondNumber").value);

    let result = valueOfFirstInput - valueOfSecondInput;

    let divResult = divParent.querySelector("#result");

    divResult.textContent = result;
}