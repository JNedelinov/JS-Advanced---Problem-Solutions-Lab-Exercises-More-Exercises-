// 1. Sort Array

function sortArray(arr = [], sortingMethod = '') {
    if (sortingMethod === 'asc') { return sortAsc(arr); }
    return sortDesc(arr);

    function sortDesc(arr = []) {
        return arr.sort((a, b) => b - a);
    }

    function sortAsc(arr = []) {
        return arr.sort((a, b) => a - b);
    }
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));

// 2. Argument Info

/* function newFn() {
    return true;
}

const n = 1;

console.log(typeof newFn);	 */

function argumentInfo() {
    const objectOfArguments = arguments;
    let arrOfTypes = createArrOfTypes(objectOfArguments); // function да ми изкарва всичките types

    for (let key in arguments) {
        console.log(`${typeof arguments[key]}: ${arguments[key]}`);
    }
    /* console.log(Object.values(arguments)); */

    arrOfTypes.forEach(type => console.log(type));

    function createArrOfTypes(obj) {
        let arr = [];
        let typeObj = {};
        for (let key in obj) {
            let type = typeof obj[key];
            if (!typeObj[type]) {
                typeObj[type] = 1;
            } else {
                typeObj[type]++;
            }
        }
        Object.keys(typeObj)
            .sort((a, b) => typeObj[b] - typeObj[a])
            .forEach(key => arr.push(`${key} = ${typeObj[key]}`));
        return arr;
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); }, 23, 'cat', 'cat', 23, 42);
argumentInfo({ name: 'bob' }, 3.333, 9.999);

// 3. Personal BMI

function createObject(name, age, weight, height) {
    const personObj = {};
    personObj.name = name;

    const personalInfo = { age: age, weight: weight, height: height };
    personObj.personalInfo = personalInfo;

    const BMI = Math.round(weight / Math.pow((height / 100), 2));
    personObj.BMI = BMI;

    let status = '';

    if (BMI < 18.5) { status = 'underweight'; }
    else if (BMI >= 18.5 && BMI < 25) { status = "normal"; }
    else if (BMI >= 25 && BMI < 30) { status = "overweight"; }
    else if (BMI > 30) { status = "obese"; }

    personObj.status = status;

    if (personObj.status === 'obese') { personObj.recommendation = 'admission required' }

    return personObj;
}

console.log(createObject("Peter", 29, 75, 142));

// 4. Vector Math

/* const solution =  */(function () {

    function add(vectorOne, vectorTwo) {
        return [vectorOne[0] + vectorTwo[0], vectorOne[1] + vectorTwo[1]];
    }

    function multiply(vector, multiplyer) {
        let newVector = [];
        newVector.push(vector[0] * multiplyer, vector[1] * multiplyer);
        return newVector;
    }

    function length(vector) {
        return Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2));
    }

    function dot(vectorOne, vectorTwo) {
        return (vectorOne[0] * vectorTwo[0] + vectorOne[1] * vectorTwo[1]);
    }

    function cross(vectorOne, vectorTwo) {
        return (vectorOne[0] * vectorTwo[1] - vectorOne[1] * vectorTwo[0]);
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
})();

/* console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0])); */


/* let f = function() {
    console.log(arguments.callee.a);
};

f.a = 'Test';
f(); */



/* arguments.callee.add = function (vectorOne, vectorTwo) {
    return [vectorOne[0] + vectorTwo[0], vectorOne[1] + vectorTwo[1]];
}
arguments.callee.multiply = function (vector, multiplyer) {
    let newVector = [];
    newVector.push(vector[0] * multiplyer, vector[1] * multiplyer);
    return newVector;
}
arguments.callee['length'] = function (vector) {
    return Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2));
} */


// 5. Breakfast Robot

/* console.error(""); */

function solution() {

    const cookingRecipes = {
        apple: { carbohydrate: 1, flavour: 2, },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    return function (str = '') {
        [command, recipeFlavour, quantity] = str.split(' ');
        quantity = Number(quantity);

        switch (command) {
            case "restock": {
                stock[recipeFlavour] += quantity;
                return 'Success';
            };
            case 'prepare': {
                let copyOfStock = {};
                Object.keys(stock).forEach(ing => copyOfStock[ing] = stock[ing]);
                Object.keys(cookingRecipes[recipeFlavour]).forEach(ingredient => cookingRecipes[recipeFlavour][ingredient] *= quantity);
                let neededIngredientsObj = cookingRecipes[recipeFlavour];
                let arr = Object.keys(neededIngredientsObj);
                for (let i = 0; i < arr.length; i++) {
                    let ingredient = arr[i];
                    if (neededIngredientsObj[ingredient] > stock[ingredient]) {
                        stock = Object.assign(copyOfStock);
                        return `Error: not enough ${ingredient} in stock`;
                    } else if (neededIngredientsObj[ingredient] <= stock[ingredient]) {
                        stock[ingredient] -= neededIngredientsObj[ingredient];
                    }
                }
                Object.keys(cookingRecipes[recipeFlavour]).forEach(ingredient => cookingRecipes[recipeFlavour][ingredient] /= quantity);
                return 'Success';
            };
            case 'report': {
                let result = [];
                Object.keys(stock).forEach(ingredient => result.push(`${ingredient}=${stock[ingredient]}`));
                return result.join(' ');
            }
        }
    }
}

let manager = solution();
// console.log(manager("restock carbohydrate 10"));  // Success
// console.log(manager("restock flavour 10"));  // Success
// console.log(manager("prepare apple 1"));  // Success
// console.log(manager("restock fat 10"));  // Success
// console.log(manager("prepare burger 1"));
// /* console.log(manager("restock flavour 50")); */
// console.log(manager("report"));

/* console.log(manager('restock protein 100', 'Success'));
console.log(manager('restock carbohydrate 100', 'Success'));
console.log(manager('restock fat 100', 'Success'));
console.log(manager('restock flavour 100', 'Success'));
console.log(manager('report'));
console.log(manager('prepare burger 2', 'Success'));
console.log(manager('report'));
console.log(manager('prepare burger 1', 'Success'));
console.log(manager('report'));
 */

console.log(manager('prepare turkey 1', 'Error: not enough protein in stock'));
console.log(manager('restock protein 10', 'Success'));
console.log(manager('prepare turkey 1', 'Error: not enough carbohydrate in stock'));
console.log(manager('restock carbohydrate 10', 'Success'));
console.log(manager('prepare turkey 1', 'Error: not enough fat in stock'));
console.log(manager('restock fat 10', 'Success'));
console.log(manager('prepare turkey 1', 'Error: not enough flavour in stock'));
console.log(manager('restock flavour 10', 'Success'));
console.log(manager('prepare turkey 1', 'Success'));
console.log(manager('report', 'protein=0 carbohydrate=0 fat=0 flavour=0'));