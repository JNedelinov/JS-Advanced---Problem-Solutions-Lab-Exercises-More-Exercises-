function solution() {
    const divContainer = document.querySelector('.container');

    const sections = divContainer.querySelectorAll('section');

    const addGiftsSection = sections[0];
    const listOfGiftsSection = sections[1];
    const sentGiftsSection = sections[2];
    const discardedGiftsSection = sections[3];

    const input = addGiftsSection.querySelector('input');
    const addGiftBtn = addGiftsSection.querySelector('button');

    addGiftBtn.addEventListener("click", addGift);

    let ul = [];

    function sendGift(e) {
        const list = e.target.parentElement;
        
        let indexOfList = ul.indexOf(list);
        ul.splice(indexOfList, 1);

        const parentOfList = list.parentElement; // ul

        const buttons = list.querySelectorAll('button');
        const sendBtn = buttons[0];
        const discardBtn = buttons[1];

        list.removeChild(sendBtn);
        list.removeChild(discardBtn);

        const sentGiftsUl = sentGiftsSection.querySelector('ul');

        parentOfList.removeChild(list);
        sentGiftsUl.appendChild(list);
    }

    function discardGift(e) {
        const list = e.target.parentElement;
        
        let indexOfList = ul.indexOf(list);
        ul.splice(indexOfList, 1);

        const parentOfList = list.parentElement; // ul

        const buttons = list.querySelectorAll('button');
        const sendBtn = buttons[0];
        const discardBtn = buttons[1];

        list.removeChild(sendBtn);
        list.removeChild(discardBtn);

        const discardGifts = discardedGiftsSection.querySelector('ul');

        parentOfList.removeChild(list);
        discardGifts.appendChild(list);
    }


    function addGift(e) {
        const giftName = input.value;

        const li = document.createElement('li');
        li.classList.add('gift');
        li.textContent = giftName;

        const sendBtn = document.createElement('button');
        sendBtn.id = 'sendButton';
        sendBtn.textContent = 'Send';
        sendBtn.addEventListener('click', sendGift);

        const discardBtn = document.createElement('button');
        discardBtn.id = 'discardButton';
        discardBtn.textContent = 'Discard';
        discardBtn.addEventListener('click', discardGift);

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);

        ul.push(li);

        if (listOfGiftsSection.querySelector('ul')) {
            const currUl = document.querySelector('ul');
            listOfGiftsSection.removeChild(currUl);
        }

        if (ul.length > 1) {
            ul = ul.sort((a, b) => a.textContent.localeCompare(b.textContent));
        }

        let realUl = document.createElement('ul');

        ul.forEach(li => realUl.appendChild(li));

        listOfGiftsSection.appendChild(realUl);
        input.value = '';
    }

}