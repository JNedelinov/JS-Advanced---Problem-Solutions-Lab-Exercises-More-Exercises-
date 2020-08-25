function encodeAndDecodeMessages() {
    let encodeInput = document.querySelector('#main > div:nth-child(1) textarea');
    let decodeInput = document.querySelector('#main > div:nth-child(2) textarea');
    console.log(encodeInput);
    console.log(decodeInput);

    let buttonEncode = document.querySelector("#main div button");
    console.log(buttonEncode);
    let buttonDecode = document.querySelector("#main div:nth-child(2) button");
    console.log(buttonDecode);

    buttonEncode.addEventListener("click", e => {
        let message = encodeInput.value;
        let encodedMsg = '';

        for (let i = 0; i < message.length; i++) {
            let prevChar;
            let currChar = message[i];
            let nextChar;

            if (i === 0) {
                nextChar = message[i + 1];
                if (nextChar === " ") {
                    let code = currChar.charCodeAt(0) + 1;
                    encodedMsg += String.fromCharCode(code);
                } else {
                    let code = currChar.charCodeAt(0);
                    encodedMsg += String.fromCharCode(code);
                }
            } else if (i !== 0 && i < message.length) {
                prevChar = message[i - 1];
                nextChar = message[i + 1];
                if (prevChar === ' ' && nextChar === ' ') {
                    let code = currChar.charCodeAt(0) + 1;
                    encodedMsg += String.fromCharCode(code);
                } else if (currChar === " ") {
                    let code = currChar.charCodeAt(0) + 1;
                    encodedMsg += String.fromCharCode(code);
                } else {
                    let code = currChar.charCodeAt(0);
                    encodedMsg += String.fromCharCode(code);
                }
            }
        }

        decodeInput.value = encodedMsg;

        encodeInput.value = '';
    })
}