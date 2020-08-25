// 1. String Length

function findStringLength(str1 = '', str2 = '', str3 = '') {
    let sum = 0;
    for (let key in arguments) {
        sum += arguments[key].length;
    }

    console.log(sum);
    console.log(Math.floor(sum / 3));
}

findStringLength('chocolate', 'ice cream', 'cake');

// 2. Math Operations

function mathOperations(num1, num2, operator) {
    let sum = 0;

    switch (operator) {
        case '+': sum = num1 + num2; break;
        case '-': sum = num1 - num2; break;
        case '*': sum = num1 * num2; break;
        case '/': sum = num1 / num2; break;
        case '%': sum = num1 % num2; break;
        case '**': sum = num1 ** num2; break;
    }

    return sum;
}

console.log(mathOperations(2, 4, '**'));

// 3. Sum of Numbers N...M

function sumBetweenNandM(str1, str2) {
    let n = +str1;
    let m = +str2;

    let sum = 0;

    for (let i = n; i <= m; i++) {
        sum += i;
    }

    console.log(sum);
}

sumBetweenNandM('-8', '20');

//  4. Largest Number

function largestNumber() {
    let max = Number.MIN_SAFE_INTEGER;
    for (let key in arguments) {
        if (arguments[key] > max) {
            max = arguments[key];
        }
    }

    console.log(`The largest number is ${max}.`);
}

largestNumber(-5, -3, -16);

// 5. Circle Area

function circleArea() {
    let element = arguments[0];
    if (typeof (element) === 'number') { // if (!isNaN(element))
        let area = Math.PI * Math.pow(element, 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we recieve a ${typeof (element)}`)
    }
}

circleArea(5);

// 6. Square of Stars

function squareOfStars() {
    for (let i = 1; i <= arguments[0]; i++) {
        console.log('* '.repeat(arguments[0]));
    }
}

squareOfStars(2);

// 7. Day of Week

function dayOfWeek() {
    let string = arguments[0].toLowerCase();
    let result = '';
    switch (string) {
        case 'monday': result = 1; break;
        case 'tuesday': result = 2; break;
        case 'wednesday': result = 3; break;
        case 'thursday': result = 4; break;
        case 'friday': result = 5; break;
        case 'saturday': result = 6; break;
        case 'sunday': result = 7; break;
        default: result = 'error'; break;
    }
    return result;
}

console.log(dayOfWeek('monda'));

// 8. Aggregate Elements

function aggregateElements() {
    let arr = arguments[0];
    let sum = arr.reduce((acc, curr) => acc += curr, 0);
    let concat = arr.join('');
    let inverseSum = 0;

    for (let num of arr) {
        inverseSum += 1 / num;
    }

    console.log(`${sum}\n${inverseSum}\n${concat}`);
}

aggregateElements([1, 2, 3]);

// 9. Words Uppercase

function wordsUppercase() {
    let regex = /[\W ]+/gm;
    let arr = arguments[0].split(regex);
    arr.pop();
    arr = arr.map(word => word = word.toUpperCase());
    console.log(arr.join(', '));
}

wordsUppercase('Hi, how are you?');

// ПРИМЕРНО РЕШЕНИЕ БЕЗ SWITCH-CASE ЗА ВТОРА ЗАДАЧА

function solve(num1, num2, op) {
    let cases = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b,
    }

    return cases[op](num1, num2);
}

console.log(solve(1, 2, '+'));