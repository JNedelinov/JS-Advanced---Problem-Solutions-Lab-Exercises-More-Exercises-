function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll("button"));

    let usersLocked = {
        1: "user1Locked",
        2: "user2Locked",
        3: "user3Locked"
    }

    let hidden = {
        1: "user1HiddenFields",
        2: "user2HiddenFields",
        3: "user3HiddenFields",
    }

    buttons.forEach((button, index) => {
        button.addEventListener("click", e => {
            let currRadio = Array.from(document.querySelectorAll(`input[name=${usersLocked[index + 1]}]`));

            currRadio.forEach(radio => {
                if (radio.value === "unlock" && radio.checked) {
                    if (e.target.textContent === 'Show more') {
                        document.querySelector(`#${hidden[index + 1]}`).style.display = 'block';
                        e.target.textContent = 'Hide it';
                    } else {
                        document.querySelector(`#${hidden[index + 1]}`).style.display = 'none';
                        e.target.textContent = 'Show more';
                    }
                }
            })
        });
    });
}