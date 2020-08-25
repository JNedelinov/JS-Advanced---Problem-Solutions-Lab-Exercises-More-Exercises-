
// Currying vs. Partial Application

/* function getProp(propName, obj) {
    return obj[propName] || null;
}

function getName(obj) {
    return getProp('name', obj);
}

function getUserNames(array) {
    return array.map(getName);
}

let namesArr = getUserNames([{ name: 'Ivan', age: 23 }, { name: "J", age: 24 }]);
console.log(namesArr); */


// Closure

// immediately invoked function

(function () {

}());

// example - как е изглеждало преди

// const myLib = (function (global) {

//     // closure

//     let someValue = 100;

//     function add(a, b) { return a + b + someValue; }
//     function sub(a, b) { return a - b - someValue; }

//     // ...

//     return {
//         add,
//         sub,
//         changeSomeValue(newValue) {
//             someValue = newValue;
//         }
//     };

// }(window || global));

// myLib.add();
// myLib.sub();

// new ES6 modules

// example from presentation

const f = (function () {
    let counter = 0;
    return function () {
        console.log(++counter);
    }
})();

f();
f();
f();

// EXAMPLES FOR CURRYING

function curry(fn) {
    return function helper(...args) {
        if (args.length === fn.length) {
            return fn(...args);
        } else {
            return function (...newArgs) {
                return helper(...args.concat(newArgs));
            }
        }
    }
}

function sum(a, b, c) {
    return a + b + c;
}

/* function j(v, c) {
    return true
}
console.log(sum.length);
console.log(j.length); */

const cSum = curry(sum);

/* function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
 */
cSum(1)(2)(3);
cSum(1, 2)(3);
cSum(1, 2, 3);
cSum(1)(2, 3);



// COMPOSITION

const addThree = cSum(1)(2);
const addFour = cSum(2)(2);

function compose(...fns) {
    return function (val) {
        return fns.reduceRight(function (acc, currFn) {
            return currFn(acc);
        }, val);
    }
}

function getProp(name, obj) {
    return obj[name];
}

function map(fn, arr) {
    return arr.map(i => fn(i));
}

function filter(pred, arr) {
    return arr.filter(i => pred(i));
}

const cGetProp = curry(getProp);
const cMap = curry(map);
const cFilter = curry(filter);

const getName = cGetProp('name');
const mapUserNames = cMap(getName);
const lengthLargerThan3 = cFilter(x => x.length > 3);

const arr = [
    { name: 'a', age: 1, },
    { name: 'ab', age: 2 },
    { name: 'abc', age: 2 },
    { name: 'abcd', age: 2 },
    { name: 'abcde', age: 2 }
]

const processUsers = compose(lengthLargerThan3, mapUserNames)
console.log(processUsers(arr));

const operation = compose(addThree, addFour);

// когато говорим за функционално програмиране, композицията ни тече отдясно наляво

console.log(operation(10));