function validate() {
    let input = document.querySelector("#email");
    input.addEventListener("change", e => {
        if (!/[a-z]+\@[a-z]+\.[a-z]+/.test(e.target.value)) {
            e.target.classList.add("error");
        } else {
            e.target.classList.remove("error");
        }

    })
}