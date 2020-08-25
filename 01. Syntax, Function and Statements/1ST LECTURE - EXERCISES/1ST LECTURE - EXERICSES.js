// 1. Fruit

function fruitCalc(fruit = '', weight, pricePerKg) {
    let weightInKgs = weight / 1000;
    let neededMoney = weightInKgs * pricePerKg;
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKgs.toFixed(2)} kilograms ${fruit}.`);
}

fruitCalc('orange', 2500, 1.80);

// 2. Greatest Common Divisor - GCD

function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

console.log(gcd(1071, 1029));

function gcdd(a, b) {
    let biggerNum = Math.max(a, b);
    let smallerNum = Math.min(a, b);

    if (smallerNum === 0) {
        return biggerNum;
    } else {
        let r;
        let q;
        while (r !== 0) {
            q = (Math.floor(biggerNum / smallerNum));
            r = (biggerNum % smallerNum);
            biggerNum = smallerNum;
            smallerNum = r;
        }

        return biggerNum;
    }

}

console.log(gcdd(1701, 3768));

/*

    1071 = 1029 * 1 + 42
    1029 = 42 * 1 + 21
    42 = 21 * 2 + 0

*/

// 3. Same Numbers

function sameNumbers() {
    let integer = arguments[0];
    let arr = integer.toString().split('').sort((a, b) => +a - (+b)).map(a => a = +a);
    if (arr[0] !== arr[arr.length - 1]) {
        console.log(false);
    } else {
        console.log(true);
    }
    console.log(arr.reduce((acc, curr) => acc += curr, 0));
}

sameNumbers(1234);

// 4. Time to Walk

function timeToWalk(steps, meters, speed) {

    let metersInKm = meters / 1000;
    let totalDistanceKM = metersInKm * steps;
    let timeInHours = totalDistanceKM / speed;
    let timeInMinutes = Number((timeInHours * 60).toFixed(2));

    let hours = getTheHours(timeInHours);
    let minutes = getTheMinutes(timeInMinutes);
    let seconds = getTheSeconds(timeInMinutes);

    let breaks = Math.floor((totalDistanceKM * 1000) / 500);

    if ((minutes + breaks) > 59) {
        minutes = minutes + breaks - 60;
    } else {
        minutes += breaks;
    }

    if (seconds >= 0 && seconds <= 9) {
        let newSeconds = `0${seconds}`;
        seconds = newSeconds;
    }

    if (minutes >= 0 && minutes <= 9) {
        let newMinutes = `0${minutes}`;
        minutes = newMinutes;
    }

    if (hours >= 0 && hours <= 9) {
        let newHours = `0${hours}`;
        hours = newHours;
    }

    console.log(`${hours}:${minutes}:${seconds}`);

    function getTheSeconds(minutes) {
        let seconds = Math.ceil(Math.abs(Math.floor(minutes) * 60 - (minutes * 60)));
        return seconds;
    }

    function getTheMinutes(hours) {
        let minutes = Math.floor(hours);
        return minutes;
    }

    function getTheHours(hours) {
        let hour = Number((hours).toFixed(0));
        return hour;
    }
}

timeToWalk(2564, .70, 5.5);

// 5. Road Radar

function roadRadar(arr = []) {
    let currSpeed = arr[0];
    let area = arr[1];

    let difference = 0;

    switch (area) {
        case 'motorway': {
            difference = 130 - currSpeed;
        }; break;
        case 'interstate': {
            difference = 90 - currSpeed;
        }; break;
        case 'city': {
            difference = 50 - currSpeed;
        }; break;
        case 'residential': {
            difference = 20 - currSpeed;
        }; break;
    }

    if (difference < 0) {
        difference = Math.abs(difference);
        if (difference >= 1 && difference <= 20) {
            console.log('speeding');
        } else if (difference >= 21 && difference <= 40) {
            console.log('excessive speeding');
        } else {
            console.log('reckless driving');
        }
    }
}

roadRadar([90, 'city']);

// 6. Cooking by Numbers

// function solve([num, ...params])

function cookingByNumbers(arr = []) {
    let obj = {
        'chop': (number) => { return number /= 2; },
        'dice': (number) => { return number = Math.sqrt(number); },
        'spice': (number) => { return number += 1; },
        'bake': (number) => { return number *= 3; },
        'fillet': (number) => { return number = number - (number * .20); },
    }

    let copyArr = arr.slice(0);
    let number = +copyArr.shift();

    for (let command of copyArr) {
        number = obj[command](number);
        console.log(number);
    }
}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);

// 7. Validity Checker

function validityChecker(arr = []) {
    let copyArr = arr.slice(0);
    let x1 = copyArr.shift();
    let y1 = copyArr.shift();
    let x2 = copyArr.shift();
    let y2 = copyArr.shift();

    let fCheck = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2));
    let sCheck = Math.sqrt(Math.pow((0 - x2), 2) + Math.pow((0 - y2), 2));
    let tCheck = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    if (Number.isInteger(fCheck)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(sCheck)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(tCheck)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

validityChecker([3, 0, 0, 4])

// 8. Calorie Object

function calObject(arr = []) {
    let obj = {};

    for (let i = 0; i < arr.length; i += 2) {
        obj[arr[i]] = +arr[i + 1];
    }

    console.log(obj);
}

calObject(['Yoghurt', '48', 'Rice', '138']);