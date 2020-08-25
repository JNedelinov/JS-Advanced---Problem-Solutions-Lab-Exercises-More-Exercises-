// 3. Library

class Library {

    #privateSubsObj = {};

    constructor(librabryName) {
        this.librabryName = librabryName;
        this.subscribers = [];
        this.subscribtionTypes = {
            normal: this.librabryName.length,
            special: this.librabryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER,
        }
    }

    subscribe(name, type) {
        if (!this.subscribtionTypes[type]) { throw Error(`The type ${type} is invalid`) }

        if (this.#privateSubsObj.hasOwnProperty(name)) {
            this.#privateSubsObj[name].type = type;
        } else {
            this.#privateSubsObj[name] = { name, type, books: [] };
            this.subscribers.push(this.#privateSubsObj[name]);
        }

        return this.#privateSubsObj[name];
    }

    unsubscribe(name) {
        if (this.#privateSubsObj[name]) {
            let newArr = this.subscribers.filter(sub => sub.name !== name);
            this.subscribers = newArr.slice(0);
        } else {
            throw Error(`There is no such subscriber as ${name}`);
            // "There is no such subscriber as {name}"
        }

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        if (!this.#privateSubsObj[subscriberName]) {
            throw Error(`There is no such subscriber as ${name}`);
        } else {
            const normalBooks = this.subscribtionTypes.normal;
            const specialBooks = this.subscribtionTypes.special;

            let currBookCount = this.#privateSubsObj[subscriberName].books.length;

            if (this.#privateSubsObj[subscriberName].type === 'normal') {
                if (currBookCount + 1 <= normalBooks) {
                    this.#privateSubsObj[subscriberName].books.push({ title: bookTitle, author: bookAuthor });
                } else {
                    throw Error(`You have reached your subscription limit ${normalBooks}!`);
                }
            } else if (this.#privateSubsObj[subscriberName].type === 'special') {
                if (currBookCount + 1 <= specialBooks) {
                    this.#privateSubsObj[subscriberName].books.push({ title: bookTitle, author: bookAuthor });
                } else {
                    throw Error(`You have reached your subscription limit ${specialBooks}!`);
                }
            } else if (this.#privateSubsObj[subscriberName].type === 'vip') {
                this.#privateSubsObj[subscriberName].books.push({ title: bookTitle, author: bookAuthor });
            }
        }

        return this.#privateSubsObj[subscriberName];
    }

    showInfo() {
        if (this.subscribers.length === 0) { return `${this.librabryName} has no information about any subscribers` };

        return this.subscribers.map(person => {
            let allBooks = person.books.map(book => `${book.title} by ${book.author}`);
            return `Subscriber: ${person.name}, Type: ${person.type}\nReceived books: ${allBooks.join(', ')}`;
        }).join('\n');
    }

}

let lib = new Library('Lib');

/* lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');
lib.subscribe('Josh', 'vip');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo()); */

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');
lib.subscribe('Josh', 'vip');


lib.subscribe('John', 'vip');
/* lib.unsubscribe('John'); */

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
/* lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien'); */
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');
lib.receiveBook('Josh', 'Graf Monte Cristo', 'Alexandre Dumas');
lib.receiveBook('Josh', 'Cromwell', 'Victor Hugo');
lib.receiveBook('Josh', 'Marie Tudor', 'Victor Hugo');
lib.receiveBook('Josh', 'Bug-Jargal', 'Victor Hugo');
lib.receiveBook('Josh', 'Les Orientales', 'Victor Hugo');
lib.receiveBook('Josh', 'Marion de Lorme', 'Victor Hugo');

lib.unsubscribe('John');

console.log(lib.showInfo());

/*

--- working code ---

this.subscribers.forEach(subObj => {
    result += `Subscriber: ${subObj.name}, Type: ${subObj.type}\n`;

    if (subObj.books.length === 0) {
        result += 'Received books: \n';
    } else {
        result += 'Received books: ';
    }

    subObj.books.forEach((book, index, arr) => {
        if (index === arr.length - 1) {
            result += `${book.title} by ${book.author}\n`;
        } else {
            result += `${book.title} by ${book.author}, `;
        }
    });
});


for (let subObj of this.subscribers) {
            result += `Subscriber: ${subObj.name}, Type: ${subObj.type}\n`;

            if (subObj.books.length === 0) {
                result += 'Recieved books: \n';
            }

            result += 'Received books: ';

            subObj.books.forEach((book, index, arr) => {
                if (index === arr.length - 1) {
                    result += `${book.title} by ${book.author}\n`;
                } else {
                    result += `${book.title} by ${book.author}, `;
                }
            });
        }

*/