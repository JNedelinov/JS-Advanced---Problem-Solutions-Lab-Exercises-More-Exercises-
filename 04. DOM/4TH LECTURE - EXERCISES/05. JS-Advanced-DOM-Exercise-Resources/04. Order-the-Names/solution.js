function solve() {
    let textInput = document.querySelector("input[type=text]");
    let buttonInput = document.querySelector("button[type=button]");

    let orderedList = document.querySelector("div#exercise div ol");
    let lettersLi = Array.from(orderedList.querySelectorAll("li")); // 26 letters

    lettersLi.map(li => {
        return li.textContent = li.textContent.trim();
    })

    let lettersObject = {};

    for (let i = 0; i < lettersLi.length; i++) {
        lettersObject[String.fromCharCode(65 + i)] = i;
    }

    buttonInput.addEventListener("click", function () {
        if (!textInput.value) { return; }

        let textInputValue = textInput.value;
        let firstLetter = textInputValue[0].toUpperCase();

        if (lettersObject.hasOwnProperty(firstLetter)) {
            let name = `${firstLetter}${textInputValue.slice(1).toLowerCase()}`;
            let currLi = lettersLi[lettersObject[firstLetter]];
            currLi.textContent.length >= 1 ? currLi.textContent += `, ${name}` : currLi.textContent += name;
            textInput.value = '';
        }
    });
}



/* function solve() {
    // Capitalizing Function:
    String.prototype.capitalize = function() {
        // IF called to ANY string.capitalize() the string will become:
        // The First letter will be capital and the rest - lower Case.
        return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
    }

    // First lets get that button working:
    document.querySelector('button').addEventListener("click", function(){
        // Now let's see the input text:
        let text = document.querySelector('input');
        if (!text.value) { return; }  // If empty break the function

        // Now get the first letter Index:
        let firstLetterIndex = text.value[0].toUpperCase().charCodeAt(0) - 65;

        // Now lets get the list element on that index:
        let element = document.querySelector('ol').children.item(firstLetterIndex);

        // Set the new element as required.
        let list = element.textContent.split(', ');  // First Create the Array,
        list.push(text.value.capitalize());  // Second Add the new item BUT CAPITALIZED,
        list = list.filter(Boolean);  // Just to make sure that there is no empty assholes.
        element.textContent = list.join(', ');  // Add the new text to the Element :)

        // Clear the input Field:
        text.value = '';
    });
} */