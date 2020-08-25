function toggle() {
    let button = document.querySelector(".head .button");

    let divExtra = document.querySelector("#extra");
    
    if (button.textContent == "More") {
        button.textContent = "Less";
        divExtra.style.display = "block";
        
    } else {
        button.textContent = "More";
        divExtra.style.display = "none";
    }
}