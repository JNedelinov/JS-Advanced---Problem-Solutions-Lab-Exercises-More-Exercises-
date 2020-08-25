function addItem() {
    let input = document.querySelector("#newText");

    let li = document.createElement("li");
    li.textContent = input.value;

    let a = document.createElement("a");
    a.textContent = "[Delete]";
    a.href = '#';
    
    li.appendChild(a);

    a.addEventListener("click", e => {
        li.remove();
        e.target.preventDefault();
    });
    
    document.querySelector("#items").appendChild(li);
    input.value = '';
}