// 1. Area and Volume Calculator

function area() {
    return this.x * this.y;
}

function vol() {
    return this.x * this.y * this.z;
}

function solve(funcArea, funcVol, jsonString) {
    let jsonArr = JSON.parse(jsonString);

    let arr = [];

    jsonArr.forEach(obj => {
        let newObj = {
            area: Math.abs(funcArea.call(obj)),
            volume: Math.abs(funcVol.call(obj)),
        };
        arr.push(newObj);
    })

    return arr;
}

console.log(solve(area, vol, '[{ "x": "1", "y": "2", "z": "10" },{ "x": "7", "y": "7", "z": "10" },{ "x": "5", "y": "2", "z": "10" }]'));
console.log(solve(area, vol, '[{"x":"10","y":"-22","z":"10"},{"x":"47","y":"7","z":"-5"},{"x":"55","y":"8","z":"0"},{"x":"100","y":"100","z":"100"},{"x":"55","y":"80","z":"250"}]'));

// 2. Person

function Person(_firstName, _lastName) {
    // както и в класовете, така и тук си взимаме имената на дадения person и ги слагаме в обект, отговарящ на име person
    this.firstName = _firstName;
    this.lastName = _lastName;

    /* 
        - контекстът на това property му е Person constructor функцията
        - вътре в дефинирането, дефинираме и новото property, което е с име fullName
        - fullName има два метода: 
            - get & set fullName
    */
    Object.defineProperty(this, "fullName", {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(newFullName) {
            let nameArr = newFullName.split(' ');
            if (nameArr.length !== 2) { return; } // проверка дали името е валидно
            this.firstName = nameArr[0];
            this.lastName = nameArr[1];
        }
    });
}

/* class Person {
    constructor(_firstName, _lastName) {
        this.firstName = _firstName;
        this.lastName = _lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(newName = '') {
        let arr = newName.split(" ");
        if (arr.length !== 2) { return; }
        this.firstName = arr[0];
        this.lastName = arr[1];
    }
}
 */

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName)//Nikola
console.log(person.lastName)//Tesla

// 3. ArrayMap

// дефинираме си array
let nums = [1, 2, 3, 4, 5];

// логваме създанената от нас функция в конзолата
/* console.log(arrayMap(nums, (item) => item * 2)); */

/* 
    1. създаваме си новата функция arrayMap
    2. има вход два параметъра: 
        - някакъв array
        - някаква фунцкия
    3. в условието е казано, че създадената от нас функция трябва да 
    използва .reduce() метода, за да имплементира проста версия на 
    .map() метода. Затова ние правим точно това => 
        
    return arr.reduce(function (acc,curr) {

    }, []); 

    * прилагаме метода reduce на arr
    * слагаме му функция (най-обикновена)
    * задаваме acc & curr, като acc ще отговаря на празен масив
    * след това ...
    
    return arr.reduce(function (acc,curr) {
        return acc.concat(fn(curr));
    }, []); 
    
    * след това acc-масива го обединяваме с новополучения масив от 
    функцията зададена от входа: "fn", чиято функционалност е: 

    пример: (item) => item * 2

    ... да умножи всяко число, което получава по 2;

    * след всички тези операции return-aме новополучения масив

*/

/* function arrayMap(arr = [], fn) {
    return arr.reduce(function (acc, curr) {
        return acc.concat(fn(curr));
    }, []);
} */

function fn(element) {
    return element *= element;
}

function arrayMap(arr = [], fn) {
    return arr.reduce(function (acc, curr) {
        /* return acc.push(fn(curr)); - output е TypeError, защото:  */
        return acc.concat(fn(curr));
    }, []);
}

console.log(arrayMap([1, 2, 3, 4, 5], fn)/* (element) => element *= element) */);



// 5. Spy

/* function Spy(target, method) {
    let output = {
        count: 0,
    }

    let fn = target[method];

    target[method] = function () {
        output.count++;
        return fn.apply(this, arguments);
    }

    return output;
}

let obj = {
    method: () => "invoked"
}
let spy = Spy(obj, "method");

obj.method();
obj.method();
obj.method();

console.log(spy) */ // { count: 3 }


/* let spy = Spy(console,"log");

console.log(spy); // { count: 1 }
console.log(spy); // { count: 2 }
console.log(spy); // { count: 3 }
 */


function createSpy(obj, methodName) {
    const spy = { count: 0 };
    const method = obj[methodName];
    if (!method) { throw new Error("No such method!"); }
    obj[methodName] = function (...args) {
        this.count++;
        return method.apply(obj, args);
    }.bind(spy);
    return spy;
}

const obj = { test: function (a, b, c) { return this.data }, data: 1 };
const s = createSpy(obj, "test");
console.log(obj.test(1, 2, 3));
console.log(obj.test(4));
console.log(obj.test(5));

console.log(s);