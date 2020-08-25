// 4. From JSON to HTML Table

function fromJSONToHTMLTable(input = []) {
    let result = '<table>\n';

    const arr = JSON.parse(input);
    const titleSet = new Set(arr.map(x => Object.keys(x)).flat());
    const titleArray = Array.from(titleSet);

    result += `<tr><th>${titleArray.join('</th><th>')}</th></tr>`;

    result = arr.reduce((acc, currItem) => {
        let innerResult = titleArray.reduce((titleAcc, currTitle) => {
            let value = currItem[currTitle];
            value = value === undefined ? '' :
                value.toString().replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#39;');

            return titleAcc += `<td>${value}</td>`;
        }, '');

        if (innerResult === '') { return acc; }
        return acc += `\n<tr>${innerResult}</tr>`;
    }, result)

    result += '\n<table>';
    return result;
}
console.log(fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']));


// MY WORKING CODE

function mySolve(input = []) {
    let result = '<table>\n';

    let objArr = JSON.parse(input);

    let keysSet = new Set(objArr.map(x => Object.keys(x)).flat());
    let keys = Array.from(keysSet);

    let values = [];
    objArr.forEach(obj => values.push(Object.values(obj)));

    result += `<tr><th>${keys.join('</th><th>')}</th></tr>\n`;

    values.forEach(value => {
        result += '<tr>';
        value.forEach(data => {
            if (isNaN(data)) {
                data = data.replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#39;');
            }
            result += `<td>${data}</td>`;
        })
        result += '</tr>\n';
    });

    result += '</table>';

    return result;
}


/* if (found.length > 1) {
    found.forEach(symbol => {
        switch (symbol) {
            case '&': { key = key.replace(symbol, '&amp;') }; break;
            case '<': { key = key.replace(symbol, '&lt;') }; break;
            case '>': { key = key.replace(symbol, '&gt;') }; break;
            case '"': { key = key.replace(symbol, '&quot;') }; break;
        }
    });
} else {
    let symbol = found[0];
    switch (symbol) {
        case '&': { key = key.replace(symbol, '&amp;') }; break;
        case '<': { key = key.replace(symbol, '&lt;') }; break;
        case '>': { key = key.replace(symbol, '&gt;') }; break;
        case '"': { key = key.replace(symbol, '&quot;') }; break;
    }
} */

/* if (found.length > 1) {
    found.forEach(symbol => {
        switch (symbol) {
            case '&': { data = data.replace(symbol, '&amp;') }; break;
            case '<': { data = data.replace(symbol, '&lt;') }; break;
            case '>': { data = data.replace(symbol, '&gt;') }; break;
            case '"': { data = data.replace(symbol, '&quot;') }; break;
        }
    });
} else {
    let symbol = found[0];
    switch (symbol) {
        case '&': { data = data.replace(symbol, '&amp;') }; break;
        case '<': { data = data.replace(symbol, '&lt;') }; break;
        case '>': { data = data.replace(symbol, '&gt;') }; break;
        case '"': { data = data.replace(symbol, '&quot;') }; break;
    }
} */


/* function entityConverter(arr = [], str = '') {
    if (arr.length > 0) {
        arr.forEach(symbol => {
            switch (symbol) {
                case '&': { str = str.replace(symbol, '&amp;') }; break;
                case '<': { str = str.replace(symbol, '&lt;') }; break;
                case '>': { str = str.replace(symbol, '&gt;') }; break;
                case '"': { str = str.replace(symbol, '&quot;') }; break;
            }
        });
    } else {
        let symbol = arr[0];
        switch (symbol) {
            case '&': { str = str.replace(symbol, '&amp;') }; break;
            case '<': { str = str.replace(symbol, '&lt;') }; break;
            case '>': { str = str.replace(symbol, '&gt;') }; break;
            case '"': { str = str.replace(symbol, '&quot;') }; break;
        }
    }

    return str;
} */

// 6. Person

// 6865

class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        let fullName = `${this.firstName} ${this.lastName}`;
        return `${fullName} (age: ${this.age}, email: ${this.email})`;
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());



function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName/*  === undefined ? "" : lastName ; */
            this.age = age/*  === undefined ? "" : age */;
            this.email = email/*  === undefined ? "" : email */;
        }

        toString() {
            let fullName = `${this.firstName} ${this.lastName}`;
            return `${fullName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    return [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Johnson', 25),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')

    ]
}

console.log(getPersons());

// LAB : The Rest of the Exercises

// 1. Towns to JSON

function townsToJSON(arr = []) {
    let copyArr = arr.slice(0);
    let objectNames = copyArr.shift();
    let obj = {};

    for (let line of copyArr) {
        let [town, latitude, longitude] = line.split('|').filter(x => x !== '');
        town = town.trim();
        latitude = Number(latitude.trim());
        longitude = Number(longitude.trim());

        if (!obj[town]) {
            obj[town] = {
                "Town": town,
            };
        }

        obj[town]["Latitude"] = +(latitude.toFixed(2));
        obj[town]["Longitude"] = +(longitude.toFixed(2));
    }

    let newArr = [];
    Object.keys(obj).forEach(town => {
        newArr.push(JSON.stringify(obj[town]));
    })

    return `[${newArr.join(',')}]`;
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));
console.log(townsToJSON(['| Town and Booze | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']

));

// 2. Sum by Town

function sumByTown(arr = []) {
    let obj = {};
    for (let i = 0; i < arr.length; i += 2) {
        let city = arr[i];
        let income = +arr[i + 1];

        if (!obj[city]) {
            obj[city] = income;
        } else {
            obj[city] += income;
        }
    }

    console.log(JSON.stringify(obj));
}

sumByTown(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);

// 3. Population in Towns

function populationInTowns(arr = []) {
    let obj = {};
    for (let line of arr) {
        let [town, population] = line.split(' <-> ');
        population = +population;
        obj[town] ? obj[town] += population : obj[town] = population;
    }

    Object.entries(obj).forEach(entry => console.log(`${entry[0]} : ${entry[1]}`));
}

populationInTowns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);

// 5. Lowest Prices in Cities

function lowestPricesInCities(arr = []) {
    let copyArr = arr.slice(0)/* .sort((a, b) => {
        let [atown, aproduct, aprice] = a.split(' | ');
        let [btown, bproduct, bprice] = b.split(' | ');
        aprice = +aprice;
        bprice = +bprice;
        if (aprice - bprice === 0) {
            return aproduct.localeCompare(bproduct);
        }
        return bprice - aprice;
    });
 */
    let objMap = new Map();
    let count = 0;

    for (let i = 0; i < copyArr.length; i++) {
        let [town, product, price] = copyArr[i].split(' | ');
        price = +price;

        if (!objMap.has(product)) {
            objMap.set(product, price, town);
        } else {
            let currPrice = objMap.get()
        }

    }

    console.log(objMap);
        
        /* objMap.get(key) = objMap.get(key).filter(x => {
            console.log(1);
        }) */


    /* objMap.get(product)["price"] = price;
    objMap.get(product)["town"] = town; */
    /* else {
        if (objMap.get(product)["town"] === town && objMap.get(product)["price"] > price) {
            objMap.get(product)["price"] = price;
        }
        if (objMap.get(product)["town"] !== town && objMap.get(product)["price"] > price) {
            objMap.get(product)["town"] = town;
            objMap.get(product)["price"] = price;
        }
        if (objMap.get(product)["town"] !== town && objMap.get(product)["price"] === price && count === 0) {
            count++;
        } else {
            copyArr = copyArr.filter(x => {
                let [_town, _product, _price] = x.split(' | ');
                if (_product === product && _town === town) { return false; }
                return true;
            });
        }
    } */

    /* Array.from(objMap.keys()).forEach(key => console.log(`${key} -> ${objMap.get(key)["price"]} (${objMap.get(key)["town"]})`)) */
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)

lowestPricesInCities([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]
)

// 8. Circle

class Circle {
    constructor(_radius) {
        this.radius = _radius;
    }

    get diameter() {
        return this.radius + this.radius;
    }

    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    set diameter(value) {
        return this.radius = value / 2;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

// 9. Point Distance

class Point {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }

    static distance(objOne, objTwo) {
        let x1 = objOne.x;
        let x2 = objTwo.x;
        let y1 = objOne.y;
        let y2 = objTwo.y;

        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));

// 5. Towns with lowest Price

function lowestPricesInCitiesGIT(input) {
    let map = new Map();

    for(let line of input) {
        let [town, product, price] = line.split(' | ');
        price = +price;

        if(!map.has(product)) {
            map.set(product, new Map());
        }

        map.get(product).set(town, price);
    }

    for(let [product, insideMap] of map) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let townWithLowestPrice = "";
        for(let [town, price] of insideMap) {
            if(price < lowestPrice) {
                lowestPrice = price;
                townWithLowestPrice = town;
            }
        }

        console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`);
    }
}

lowestPricesInCitiesGIT([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]
)