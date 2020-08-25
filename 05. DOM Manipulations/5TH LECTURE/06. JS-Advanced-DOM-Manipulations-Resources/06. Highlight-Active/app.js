function focus() {
    /* let bigDiv = document.querySelector("body > div");
    bigDiv.addEventListener("click", e => {
        let arrOfInputs = Array.from(document.querySelectorAll("body > div input"));
        if (arrOfInputs.includes(e.target)) {
            e.target.parentElement.classList.add("focused");
            arrOfInput = arrOfInputs.map(x => {
                if (x !== e.target) {
                    x.parentElement.classList.remove("focused");
                }

            });
        }

    }) */

    const inputs = document.querySelectorAll("input");
    Array.from(inputs).forEach(i => {
        i.addEventListener("focus", focusIn);
        i.addEventListener("blur", focusOut);
    });

    function focusIn(e) {
        e.target.parentElement.classList.add("focused");
    }

    function focusOut(e) {
        e.target.parentElement.classList.remove("focused");
    }
}