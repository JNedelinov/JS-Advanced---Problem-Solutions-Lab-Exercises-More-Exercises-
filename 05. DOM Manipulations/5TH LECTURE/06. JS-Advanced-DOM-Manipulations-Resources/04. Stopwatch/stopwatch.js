function stopwatch() {
    const buttonOne = document.querySelector("#startBtn");
    const buttonTwo = document.querySelector("#stopBtn");
    let div = document.querySelector("#time");

    let interval;

    buttonOne.addEventListener("click", e => {
        div.textContent = '00:00';
        interval = setInterval(myTimer, 1000, seconds = 0, minutes = 0, div);
        buttonOne.setAttribute("disabled", "true");
        buttonTwo.removeAttribute("disabled");
    });

    buttonTwo.addEventListener("click", e => {
        clearInterval(interval)
        buttonTwo.setAttribute("disabled", "true");
        buttonOne.removeAttribute("disabled");
    });


    function myTimer() {
        seconds++;
        if (seconds < 60) {
            if (seconds < 10) {
                seconds = `0${seconds}`;
            }
        } else if (seconds === 60) {
            seconds = 0;
            seconds = `0${seconds}`;
            minutes++;
        }

        div.textContent = minutes < 10 ? `0${minutes}:${seconds}` : `${minutes}:${seconds}`;
    }
}