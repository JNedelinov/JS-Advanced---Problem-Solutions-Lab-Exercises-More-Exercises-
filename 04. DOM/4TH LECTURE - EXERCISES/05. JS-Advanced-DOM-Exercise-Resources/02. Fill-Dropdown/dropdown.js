function addItem() {
    let articleParent = document.querySelector("article");

    let textInput = articleParent.querySelector("#newItemText");
    let valueInput = articleParent.querySelector("#newItemValue");

    let selectElement = articleParent.querySelector("#menu");

    let newOption = document.createElement("option");
    newOption.textContent = textInput.value;
    newOption.value = valueInput.value;

    selectElement.appendChild(newOption);

    textInput.value = '';
    valueInput.value = '';
}