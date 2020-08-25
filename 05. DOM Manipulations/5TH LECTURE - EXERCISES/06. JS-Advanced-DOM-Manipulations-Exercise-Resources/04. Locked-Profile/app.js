function lockedProfile() {
    let radioButtons = Array.from(document.querySelectorAll("input[type=radio]"));
    /* console.log(radioButtons); */
    let checkedRadios = radioButtons.filter(x => x.hasAttribute("checked"));
    let unlockButtons = radioButtons.filter((_, index) => index % 2 !== 0);
    /* console.log(unlockButtons); */
    let lockButtons = radioButtons.filter((_, index) => index % 2 === 0);
    /* console.log(lockButtons); */
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

/*     let users = {
        1: "user1",
        2: "user2",
        3: "user3",
    } */

    buttons.forEach((button, index) => {
        button.addEventListener("click", e => {
            /* console.log(document.querySelector(`input[name=${usersLocked[index+1]}]`).checked); */
            let currRadio = Array.from(document.querySelectorAll(`input[name=${usersLocked[index + 1]}]`));
            /* console.log(currRadio[1].checked);
            console.log(currRadio[1].value); */

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

    // radioButtons = radioButtons.map(radio => {
    //     /* console.log(radio); */
    //     /* radio.checked = false; */
    //     if (radio.hasAttribute("checked")) {
    //         radio.removeAttribute("checked");
    //     }
    // })





    // /* console.log(buttons); */
    // buttons.forEach((button, index) => {
    //     /* console.log(button);
    //     console.log(index); */
    //     /* let radioBtn = button.parentElement.querySelectorAll("input[type=radio] checked");
    //     console.log(radioBtn); */
    //     let currUser;
    //     if (index >= 0 && index <= 1) { currUser = hidden[1] }
    //     if (index >= 2 && index <= 3) { currUser = hidden[2] }
    //     if (index >= 4 && index <= 5) { currUser = hidden[3] }

    //     if (!radioButtons[index].checked) {
    //         radioButtons[index].checked = true;
    //         radioButtons[index].nextSibling.checked = false;
    //     }
    //     let currRadio = radioButtons[index];
    //     /* console.log(currRadio.value); */
    //     if (currRadio.value === "unlock" && currRadio.hasAttribute("checked")) {
    //         button.addEventListener("click", e => {
    //             document.querySelector(`#${currUser}`).style.display = 'block';
    //             e.target.textContent = 'Hide it';
    //             /* console.log(1); */
    //         });
    //     }


    // });


    // radioButtons.forEach((button, index) => {
    //     /* console.log(button); */
    //     let parentElement = button.parentElement;
    //     /* console.log(parentElement.classList[0]); */
    //     /* console.log(document.getElementsByClassName(button.parentElement.classList[0])); */

    //     addEventListener("change", e => {
    //         if (!radioButtons[index].checked) {
    //             radioButtons[index].checked = true;
    //             radioButtons[index].nextSibling.checked = false;
    //         }
    //         /* if (!e.target.hasAttribute("checked")) { */
    //         /* let currBtn = e.target;
    //         if (!currBtn.hasAttribute("checked")) {
    //             e.target.setAttribute("checked")
    //         } */
    //         /* document.querySelector(`name=user${1}Locked`).setAttribute("checked"); */
    //         /* } else {
    //             console.log(1);
    //         } */
    //     })
    // })
}