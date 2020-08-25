function solve() {
    const form = document.querySelector("body > form");

    const formInputs = form.querySelectorAll('input');

    const book = formInputs[0];
    const year = formInputs[1];
    const price = formInputs[2];

    const formBtn = form.querySelector('button');
    formBtn.setAttribute('type', 'submit');

    form.onsubmit = (e) => {
        e.preventDefault();
    }

    formBtn.addEventListener('click', addBook);

    const h1TotalStoreProfit = document.querySelectorAll('h1')[1];
    let profit = 0;

    const divOutputs = document.getElementById('outputs');

    const section = divOutputs.querySelectorAll('section');

    const oldBooksSection = section[0];
    const oldBooksSectionBookShelf = oldBooksSection.querySelector('.bookShelf');

    const newBooksSection = section[1];
    const newBooksSectionBookShelf = newBooksSection.querySelector('.bookShelf');

    function buyBook(e) {
        let book = e.target.parentElement;
        let parentDiv = book.parentElement;

        let button = e.target;
        let arr = button.textContent.split(' ');
        let priceOfBook = Number(arr[arr.length - 2]);
        profit += priceOfBook;

        h1TotalStoreProfit.textContent = `Total Store Profit: ${profit.toFixed(2)} BGN`;

        parentDiv.removeChild(book);
    }

    function moveBook(e) {
        let book = e.target.parentElement;
        let parentDiv = book.parentElement;

        let button = book.querySelector('button');
        let arr = button.textContent.split(' ');
        let priceOfBook = Number(arr[arr.length - 2]);
        priceOfBook *= 0.85;

        book.removeChild(e.target);

        button.textContent = `Buy it only for ${Number(priceOfBook).toFixed(2)} BGN`;

        oldBooksSectionBookShelf.appendChild(book);
        parentDiv.removeChild(book);
    }

    function addBook(e) {
        const divBook = document.createElement('div');
        divBook.classList.add('book');

        const p = document.createElement('p');
        p.textContent = `${book.value} [${year.value}]`;

        const buyBtn = document.createElement('button');
        buyBtn.addEventListener('click', buyBook);

        const moveBtn = document.createElement('button');
        moveBtn.textContent = 'Move to old section';
        moveBtn.addEventListener('click', moveBook);
        
        divBook.appendChild(p);
        divBook.appendChild(buyBtn);

        if (book.value !== '' && year.value >= 0 && price.value >= 0) {
            if (year.value >= 2000) {
                let startingPrice = price.value
                buyBtn.textContent = `Buy it only for ${Number(startingPrice).toFixed(2)} BGN`;
                divBook.appendChild(moveBtn);
                newBooksSectionBookShelf.appendChild(divBook);
            } else if (year.value < 2000) {
                let startingPrice = price.value;
                buyBtn.textContent = `Buy it only for ${(startingPrice *= .85).toFixed(2)} BGN`;
                oldBooksSectionBookShelf.appendChild(divBook);
            }
        }
    }
}