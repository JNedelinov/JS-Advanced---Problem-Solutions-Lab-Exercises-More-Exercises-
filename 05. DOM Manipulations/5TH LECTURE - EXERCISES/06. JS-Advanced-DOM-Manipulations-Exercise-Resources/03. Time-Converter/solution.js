function attachEventsListeners() {
    const inputsTypeText = Array.from(document.querySelectorAll("main div input[type=text]"));
    /* console.log(inputsTypeText); */
    const buttons = Array.from(document.querySelectorAll("main div input[type=button]"));
    /* console.log(buttons); */

    buttons.forEach(button => {
        button.addEventListener("click", e => {
            let metIndex = buttons.indexOf(button);
            let metricOutside = inputsTypeText[metIndex].id;
            let valueOfOutside = inputsTypeText[metIndex].value;
            inputsTypeText.forEach(input => {
                let index = inputsTypeText.indexOf(input)
                let metric = inputsTypeText[index].id;
                if (index !== metIndex) {
                    switch(metricOutside) {
                        case 'days': {
                            if (metric === "hours") {
                                inputsTypeText[index].value = 24 * valueOfOutside;
                            } else if (metric === "minutes") {
                                inputsTypeText[index].value = 1440 * valueOfOutside;
                            } else if (metric === "seconds") {
                                inputsTypeText[index].value = 86400 * valueOfOutside;
                            }
                        }; break;
                        case 'hours': {
                            if (metric === "days") {
                                inputsTypeText[index].value = valueOfOutside / 24;
                            } else if (metric === "minutes") {
                                inputsTypeText[index].value = 60 * valueOfOutside;
                            } else if (metric === "seconds") {
                                inputsTypeText[index].value = 3600 * valueOfOutside;
                            }
                        }; break;
                        case 'minutes': {
                            if (metric === "days") {
                                inputsTypeText[index].value = valueOfOutside / 1440;
                            } else if (metric === "hours") {
                                inputsTypeText[index].value = valueOfOutside / 60;
                            } else if (metric === "seconds") {
                                inputsTypeText[index].value = 60 * valueOfOutside;
                            }
                        }; break;
                        case 'seconds': {
                            if (metric === "days") {
                                inputsTypeText[index].value = valueOfOutside / 86400;
                            } else if (metric === "hours") {
                                inputsTypeText[index].value = valueOfOutside / 3600;
                            } else if (metric === "minutes") {
                                inputsTypeText[index].value = valueOfOutside / 60;
                            }
                        }; break;
                    }
                    Math.round(inputsTypeText[index].value);
                }
            });
        });
    });
}