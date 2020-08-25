function encodeAndDecodeMessages() {
    let encodeInput = document.querySelector('#main > div:nth-child(1) textarea');

    let decodeInput = document.querySelector('#main > div:nth-child(2) textarea');

    let buttonEncode = document.querySelector("#main div button");
    let buttonDecode = document.querySelector("#main div:nth-child(2) button");

    buttonEncode.addEventListener("click", e => {
        if (encodeInput.value === '') { return; }
        let message = encodeInput.value;
        let encodedMsg = '';
        for (let char of message) {
            encodedMsg += String.fromCharCode(char.charCodeAt(0) + 1)
        }
        decodeInput.value = encodedMsg;
        encodeInput.value = '';
    }, { once: true }); // one-time click

    buttonDecode.addEventListener("click", e => {
        if (decodeInput.value === '') { return; }
        let message = decodeInput.value;
        let decodeMsg = '';
        for (let char of message) {
            decodeMsg += String.fromCharCode(char.charCodeAt(0) - 1);
        }
        decodeInput.value = decodeMsg
    }, { once: true }) // one-time click
}