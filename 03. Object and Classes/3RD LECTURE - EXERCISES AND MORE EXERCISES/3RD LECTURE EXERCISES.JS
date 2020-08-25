// 1. Heroic Inventory

/* function heroicInventory(arr = []) {
    let obj = {};
    let result = [];

    for (let line of arr) {
        let [name, level, items] = line.split(' / ');
        level = +level;
        items = items ? items.split(', ') : [];

        result.push({name, level, items})
    }

    return JSON.stringify(result);
} */

function heroicInventory(arr = []) {
    let obj = {};
    let result = [];

    for (let line of arr) {
        let [hero, level, items] = line.split(' / ');

        obj[hero] = { name: hero };
        obj[hero]["level"] = +level;
        obj[hero]["items"] = items ? items.split(', ') : [];

        result.push(obj[hero]);
    }

    return JSON.stringify(result);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']
));

// 2. JSON's Table

function JSONsTable(jsonArr = []) {
    let result = '<table>';
    jsonArr.forEach(obj => {
        obj = JSON.parse(obj);
        result += '\n<tr>\n';
        Object.keys(obj).forEach(key => {
            result += `<td>${obj[key]}</td>\n`;
        });
        result += '</tr>';
    });

    return result += '\n</table>';
}

console.log(JSONsTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
));

// 3. Cappy Juice

function cappyJuice(arr = []) {
    let obj = {};

    let position = 0;

    for (let line of arr) {
        let [fruit, quantity] = line.split(' => ');
        quantity = +quantity;

        if (!obj[fruit]) {
            obj[fruit] = {
                fruit: fruit,
                quantity: quantity,
                bottles: 0,
            };

            if (obj[fruit]["quantity"] / 1000 >= 1) {
                if (!obj[fruit]["position"]) {
                    position += 1;
                    obj[fruit]["position"] = position;
                }
            }
        } else {
            obj[fruit]["quantity"] += quantity;
            if (obj[fruit]["quantity"] / 1000 >= 1) {
                if (!obj[fruit]["position"]) {
                    position += 1;
                    obj[fruit]["position"] = position;
                }
            }
        }
    }

    let sorted = Object.keys(obj).sort((a, b) => obj[a]["position"] - obj[b]["position"]);
    sorted.forEach(fruit => {
        if (obj[fruit]["quantity"] >= 1000) {
            obj[fruit]["bottles"] += Math.floor(obj[fruit]["quantity"] / 1000);
            obj[fruit]["quantity"] -= (obj[fruit]["bottles"] * 1000);
            obj[fruit]['bottles'] > 0 ? console.log(`${fruit} => ${obj[fruit]["bottles"]}`) : 'pass'
        }
    });
}

cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);
cappyJuice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);

// 4. Store Catalogue

function storeCatalogue(arr = []) {
    let obj = {};

    for (let line of arr) {
        let [product, price] = line.split(' : ');
        price = +price;
        let firstLetter = product[0];

        if (!obj[firstLetter]) {
            obj[firstLetter] = {};
        }

        obj[firstLetter][product] = price;
    }

    let sotrtedLetterGroups = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    sotrtedLetterGroups.forEach(letter => {
        console.log(letter);
        let sortedProductNames = Object.keys(obj[letter]).sort((a, b) => a.localeCompare(b));
        sortedProductNames.forEach(product => console.log(`  ${product} : ${obj[letter][product]}`));
    });
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);

// 5. Auto-Engineering Company

function auto_engineeringCompany(arr = []) {
    let obj = {};

    for (let line of arr) {
        let [brand, model, producedCars] = line.split(' | ');
        producedCars = +producedCars;

        if (!obj[brand]) {
            obj[brand] = {};
        }

        if (!obj[brand][model]) {
            obj[brand][model] = producedCars;
        } else {
            obj[brand][model] += producedCars;
        }

    }

    /* let sortedByBrandName = Object.keys(obj).sort((a, b) => a.localeCompare(b)); */

    /* sortedByBrandName */Object.keys(obj).forEach(brand => {
        console.log(brand);
        /* let sortedByProducedCars = Object.keys(obj[brand]).sort((a, b) => obj[brand][b] - obj[brand][a]); */
        /* sortedByProducedCars */Object.keys(obj[brand]).forEach(model => console.log(`###${model} -> ${obj[brand][model]}`))
    })
}

auto_engineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);

// 6. System Components

function systemComponents(arr = []) {
    let systems = {};

    for (let line of arr) {
        let [system, component, subcomponent] = line.split(' | ');

        if (!systems[system]) {
            systems[system] = {};
        }

        if (!systems[system][component]) {
            systems[system][component] = [];
        }

        systems[system][component].push(subcomponent);
    }

    let sortedSystems = Object.keys(systems).sort((a, b) => {
        return Object.keys(systems[a]).length - Object.keys(systems[b]).length === 0 ? a.localeCompare(b) :
            Object.keys(systems[b]).length - Object.keys(systems[a]).length;
    });

    sortedSystems.forEach(system => {
        console.log(system);
        let sortedComponents = Object.keys(systems[system]).sort((a, b) => systems[system][b].length - systems[system][a].length);
        sortedComponents.forEach(component => {
            console.log(`|||${component}`);
            systems[system][component].forEach(subcomponent => console.log(`||||||${subcomponent}`));
        });
    });

}

systemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
);

// 7. Data Class

class Request {
    constructor(_method, _uri, _version, _message) {
        this.method = _method;
        this.uri = _uri;
        this.version = _version;
        this.message = _message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);

// 8. Tickets

function tickets(arr = [], sortCriteria = '') {
    class Ticket {
        constructor(_destination, _price, _status) {
            this.destination = _destination;
            this.price = _price;
            this.status = _status;
        }
    }

    let result = [];

    for (let line of arr) {
        let [_destination, _price, _status] = line.split('|');
        _price = +(_price);

        let newTicket = new Ticket(_destination, _price, _status);
        result.push(newTicket);
    }

    let sortedByCriteria = result.sort((a, b) => {
        if (sortCriteria === 'destination' || sortCriteria === 'status') {
            return a[sortCriteria].localeCompare(b[sortCriteria]);
        } else {
            return a[sortCriteria] - b[sortCriteria];
        }
    });

    return sortedByCriteria;
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));

// 09. Sorted List

class List {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    add(value) {
        this.arr.push(value);
        this.size++;
        return this.arr.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && index <= this.arr.length - 1) {
            this.arr.splice(index, 1);
            this.size--;
            return this.arr.sort((a, b) => a - b);
        }
    }

    get(index) {
        if (index >= 0 && index <= this.arr.length - 1) {
            return this.arr[index];
        }
    }
}

let list = new List();
list.add(6);
list.add(4);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);

// 10. Length Limit

class Stringer {
    constructor(_str, _length) {
        this.innerString = _str;
        this.innerLength = _length;
        this.initialString = _str;
        this.initialLength = _length;
    }

    increase(value) {
        if (this.innerLength <= value) {
            this.innerLength = this.initialLength - value;
            this.innerString = this.initialString.slice(0, this.innerLength) + '...';
            return this.innerString; /*  === this.initialString ? this.innerString : `${this.innerString}...`; */
        } else {
            this.innerString = this.initialString;
            this.innerLength = this.initialLength + value;
            this.innerString = this.innerString.slice(0, this.innerLength) + '...';
            return this.innerString;
        }
    }

    decrease(value) {
        if (this.innerLength <= value) {
            this.innerString = '...';
            this.innerLength = 0;
            return this.innerString;
        }

        this.innerLength -= value;
        this.innerString = this.innerString.slice(0, this.innerLength) + '...';
        return this.innerString;
    }

    toString() {
        return this.innerString;
    }
}

let test = new Stringer("Viktor", 6);
console.log(test.toString()); // Test

test.increase(3);

test.decrease(9);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(3);
console.log(test.toString()); // Test
