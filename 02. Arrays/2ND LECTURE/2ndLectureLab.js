// 

const numArr = [1, 2, 3, 4, 5];

function removeElementAt(arr, index, newElements) {
    const items = Array.isArray(newElements) ? newElements : [];

    return [
        ...arr.slice(0, index),
        ...items,
        ...arr.slice(index + 1)
    ];
}

console.log(removeElementAt(numArr, 3, [3, 4, 5]));

// easier way to use filter()

// first we create a callback function

function isBigEnough(value) {
    return value >= 10;
};

// then we create a new variable where we'll store the filtered array

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

console.log(filtered);

// example with filter

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filterItems(arr, query) {
    return arr.filter(element => {
        return element.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
};

console.log(filterItems(fruits, 'ap'));

// range 

function range(start, end) {
    return new Array(end - start + 1)
    .fill(null)
    .map((_, index) => index + start);
}

console.log(range(2,5));

//

function solve(array = []) {
    const obj = array.reduce((acc, current, i, array) => {
        if (i % 2 !== 0) {
            acc[array[i - 1]] = Number(current);
        }
        return acc;
    }, {});
    console.log(obj);
}

solve(['Yoghurt', '48', 'Rice', '138']);

// LAB: 5. Process Odd Numbers

function processOddNumbers(arr = []) {
    return arr.filter((_, index) => index % 2 !== 0)
        .map(element => element * 2)
        .reverse()
        .join(' ');
}

console.log(processOddNumbers([10, 15, 20, 25]));

// NESTED ARRAYS 

// Looping Through a Nested Array

let arr = [[4, 5, 6], [6, 5, 4], [5, 5, 5]];

arr.forEach(printRow);

function printRow(row) {
    console.log(row);
    row.forEach(printNumber);
}

function printNumber(num) {
    console.log(num);
}

// LAB: 8. Diagonal Sums

function diagonalSums(arr = []) {
    // i + (i + 1) + ((i + 1) + 1) ...
    // i + (i - 1) + ((i - 1) - 1) ...

    let newArr = [];

    newArr.push(findMainDiagonal(arr), findSecondaryDiagonal(arr));

    console.log(newArr.join(' '));

    function findMainDiagonal(arr = []) {
        let sum = 0;
        for (let i = 0, j = 0; i < arr.length; i++, j++) {
            sum += arr[i][j];
        }
        return sum;
    }

    function findSecondaryDiagonal(arr = []) {
        let sum = 0;
        let start = arr.length - 1;
        for (let i = 0, j = start; i < arr.length; i++, j--) {
            sum += arr[i][j];
        }
        return sum;
    }
}

diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);

// example of 8.

function exampleOfEight(arr = []) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = arr[0].length - 1;
    arr.forEach(array => {
        firstDiagonal += array[firstIndex++];
        secondDiagonal += array[secondIndex--];
    });

    console.log(`${firstDiagonal} ${secondDiagonal}`);
}

exampleOfEight([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);

// LAB: The Rest of The Exericses

// 1. Sum First Last

function sumFirstLast(arr = []) {
    let newArr = arr.map(num => Number(num));
    let sum = newArr[0] + newArr[newArr.length - 1];
    return sum;
}

console.log(sumFirstLast(['5']));

// 2. Even Position Element

function evenPositionElement(arr = []) {
    return arr.filter((_, index) => index % 2 === 0).join(' ');
}

console.log(evenPositionElement(['5', '10']));

// 3. Negative / Positive Numbers

function negativePositiveNums(arr = []) {
    let newArr = [];
    arr.forEach(element => element < 0 ? newArr.unshift(element) : newArr.push(element));
    return newArr.join('\n')
}

console.log(negativePositiveNums([3, -2, 0, -1]));

// 4. Last K Numbers Sequence

function lastKNumberSequence(n, k) {
    let arr = [1];
    for (let i = 1; arr.length < n; i++) {
        let index = i - k < 0 ? 0 : i - k;
        let sum = arr.slice(index)
            .reduce((acc, curr) => acc + curr, 0);
        arr.push(sum);
    }
    return arr.join(' ');
}

console.log(lastKNumberSequence(6, 3));
console.log(lastKNumberSequence(8, 2));

// 6. Smallest Two Numbers

function smallestTwoNumbers(arr = []) {
    return arr.sort((a, b) => a - b).slice(0, 2).join(' ');
}

console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));

// 7. Biggest Element

function biggestNumber(arr = []) {
    let newArr = [];
    arr.forEach(array => newArr = newArr.concat(array));
    return newArr.sort((a, b) => a - b).pop();
}

console.log(biggestNumber([
    [20, 50, 10],
    [8, 33, 145]
]));

// 9. Equal Neighbors

function equalNeighbors(arr = []) {
    let equalsCount = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === (arr[i + 1] || [])[j]) {
                equalsCount++;
            }

            if (arr[i][j] === arr[i][j + 1]) {
                equalsCount++;
            }

        }
    }

    return equalsCount;
}

console.log(equalNeighbors([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2'],
]));

console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));