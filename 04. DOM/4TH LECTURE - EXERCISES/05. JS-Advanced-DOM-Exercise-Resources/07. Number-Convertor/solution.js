function solve() {
    let numberInput = document.querySelector("#input");

    let selectTo = document.querySelector("#selectMenuTo");

    let result = document.querySelector("#result");

    let binaryOption = document.createElement("option");
    binaryOption.value = "binary";
    binaryOption.textContent = "Binary";
    let hexadecimalOption = document.createElement("option");
    hexadecimalOption.value = "hexadecimal";
    hexadecimalOption.textContent = "Hexadecimal";

    selectTo.appendChild(binaryOption);
    selectTo.appendChild(hexadecimalOption);

    let button = document.querySelector("#container button");
    button.addEventListener("click", function (e) {
        if (selectTo.value === "binary") {
            result.value = Number(numberInput.value).toString(2);
        } else if (selectTo.value === "hexadecimal") {
            result.value = (Number(numberInput.value).toString(16)).toUpperCase();
        }
    });
}