function solve() {
    document.getElementById("dropdown").addEventListener("click", dropDown);
    const ul = document.getElementById("dropdown-ul");
    const box = document.getElementById("box");

    const initialState = {
        backgroundColor: "black",
        color: "white",
    }
    
    box.style.backgroundColor = initialState.backgroundColor;
    box.style.color = initialState.color;

    function dropDown(e) {
        if (ul.style.display !== "block") {
            ul.style.display = "block";
            [...ul.querySelectorAll("li")].forEach(li => {
                li.addEventListener("click", changeColor);
            });
        } else {
            ul.style.display = 'none';
            box.style.backgroundColor = initialState.backgroundColor;
            box.style.color = initialState.color;
        }
    }

    function changeColor(e) {
        box.style.backgroundColor = e.target.textContent;
        box.style.color = "black";
    }
}