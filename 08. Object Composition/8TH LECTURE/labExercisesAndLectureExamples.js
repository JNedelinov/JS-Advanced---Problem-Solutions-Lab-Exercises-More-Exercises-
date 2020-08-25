// Композиция на функции 

function compose(...fns) {
    return function (x) {
        return fns.reduceRight((acc, currFn) => currFn(acc), x);
    };
}

// Printing Objects - toString() Fn

let a = {};
console.log(a.toString()); // "[object Object]"
a.toString = () => { return 'this is a object'; };
console.log(a.toString()); // "this is a object"

// Aggregation Example

let dataArray = [{ id: 'a', score: 1 }, { id: 'b', score: 2 }, { id: 'c', score: 5 },
{ id: 'a', score: 3 }, { id: 'c', score: 2 }];

let res1 = dataArray.reduce((acc, curr, index, array) => {
    let same = acc.find(e => e.id === curr.id);
    if (!same) {
        acc.push(curr);
    } else {
        same.score += curr.score;
    }
    return acc;
}, []);

console.log(res1);

// Concatenation Example

/* const objs = [
    { name: "Peter", age: 35 },
    { age: 22 },
    { name: "Steven" },
    { height: 180 },
];
 */
/* const concatenate = (a, o) => ({...a, ...o}); // като Object.assign();
const newObj = objs.reduce(concatenate, {});
console.log(newObj); */

// Delegation 

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}

const ivan = new Person();
ivan.getName(); // ivan e делегат

class Persona {
    constructor(name) {
        this.name = name;
    }
    getName() {

    }
}

// Delegation Example

const objs = [
    { name: "Peter", age: 35 },
    { age: 22 },
    { name: "Steven" },
    { height: 180 },
];

const delegate = (a, b) => Object.assign(Object.create(a), b);
const d = objs.reduceRight(delegate, {});
console.log(d);
console.log(d.age);
console.log(d.name);
console.log(d.height);

// как да вземем прототипа на age, например

const prop = Object.getPrototypeOf(d); // prototype of { age: 22 }
console.log(prop.name); // Steven 

// Прототипно наследяване на най-базово ниво

const personPrototype = { // обща логика, която се наследява от различни обекти с различни проръртита
    getName() {
        return this.name;
    }
}

function createPerson(name) {
    const obj = Object.create(personPrototype);
    obj.name = name;
    return obj;
}

const vani = createPerson('Ivan');
const vani2 = createPerson('Ivan 2');
console.log(vani.getName());
console.log(vani2.getName());

// 1st Exercise Solution by Idakiev

function solution(data) {

    const recPrototyp = {
        area() {
            return this.width * this.height;
        },

        compareTo(obj) {
            const currRecArea = this.area();
            const otherRecArea = obj.area();
            return currRecArea < otherRecArea ?
                -1 : currRecArea === otherRecArea ? 0 : 1;
        }

    }

    function createRec(width, height) {
        const result = Object.create(recPrototyp);
        result.width = width;
        result.height = height;
        return result;
    }

    return data.reduce(function (acc, [width, height]) {
        return acc.concat(createRec(width, height));
    }, []);

}

console.log(solution([[10,5],[5,12]]));
console.log(solution([[10,5], [3,20], [5,12]]));
console.log(solution([[1,20],[20,1],[5,3],[5,3]]));