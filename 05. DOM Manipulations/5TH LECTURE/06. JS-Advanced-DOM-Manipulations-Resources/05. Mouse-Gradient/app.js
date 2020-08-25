function attachGradientEvents() {
    let div = document.querySelector('#gradient-box');
    div.addEventListener("mousemove"/* "click" */, e => {
        /* console.log(e.clientX / 9 * 3); */ 
        /* let percentage = e.clientX / 9 * 3 - 3; */
        /* console.log(percentage); */
        if (e.target === document.querySelector("#gradient")) {
            document.querySelector("#result").textContent = `${Math.floor(e.offsetX / 3)}%` 
        }
    })
}