function notify(message) {
    const divContent = document.querySelector("#notification");
    divContent.textContent = `${message}`;
    divContent.style.display = "block";

    setTimeout(
        function () {
            divContent.style.display = "none";
        }, 2000);
}