function addItem() {
    let input = document.querySelector("#newItemText");

    let li = document.createElement("li");
    li.textContent = input.value;

    document.querySelector("#items").appendChild(li);
    input.value = '';
}