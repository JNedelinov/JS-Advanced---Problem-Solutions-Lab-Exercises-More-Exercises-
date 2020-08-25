let arr = [1, 3, 8, 4, 10, 12, 3, 2, 24];

function extract(arr = []) {
    /* let biggest = Number.MIN_SAFE_INTEGER;
    let newArr = arr.filter(num => {
        if (num >= biggest) { // Трябвало е да има >=
            biggest = num;
            return true;
        }
    });
    return newArr.join('\n'); */

    return arr.reduce((acc, curr) => {
        let max = Math.max(...acc);
        if (curr >= max) {
            acc.push(curr);
        }
        return acc;
    }, []).join('\n');

    /* return arr.filter(num => {
        if (num > biggest) {
            biggest = num;
            return true;
        }
    }).join('\n'); */

    /* return arr.filter(num => num > biggest ? biggest = num : false).join('\n') */
}

console.log(extract(arr));
console.log(extract([1,
    2,
    3,
    4]
));
console.log(extract([20,
    3,
    2,
    15,
    6,
    1]
));

// 1. Print an Array with a Given Delimeter

function printArrayWithGivenDelimeter(arr = []) {
    return arr.join(`${arr.pop()}`);
}

console.log(printArrayWithGivenDelimeter(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']
));

// 2. Print Every N-th Element from an Array

function printEveyNthElement(arr = []) {
    let newArr = arr.slice(0);
    let nSteps = +newArr.pop();
    let currStep = 0;
    return newArr.filter((_, index) => {
        if (currStep === index) {
            currStep += nSteps;
            return true;
        }
    }).join('\n');
}

/* 
    newArr.forEach((_, index, newArr) => {
    console.log(newArr[index]);
    return index += nSteps; 
*/

console.log(printEveyNthElement(
    ['5',
        '20',
        '31',
        '4',
        '20',
        '2']
));
console.log(printEveyNthElement(
    ['dsa',
        'asd',
        'test',
        'tset',
        '2']

));
console.log(printEveyNthElement(
    ['1',
        '2',
        '3',
        '4',
        '5',
        '0']
));

// 3. Add and Remove Elements

function addAndRemoveElements(arr = []) {
    let newArr = [];
    let i = 1;
    arr.forEach(command => {
        command === 'add' ? newArr.push(i) : newArr.pop();
        i++;
    });

    return newArr.length > 0 ? newArr.join('\n') : 'Empty';
}

console.log(addAndRemoveElements(
    ['add',
        'add',
        'remove',
        'add',
        'add']
));

// 4. Rotate Array

function rotateArray(arr = []) {
    let newArr = arr.slice(0);
    let steps = +newArr.pop();
    steps %= newArr.length;
    for (let i = 0; i < steps; i++) {
        newArr.unshift(newArr.pop());
    }
    return newArr.join(' ');
}

console.log(rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
));

// 6. Sort Array

function sortArray(arr = []) {
    return arr.sort((a, b) => {
        if (a.length - b.length === 0) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    }).join('\n');
}

console.log(sortArray(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
));

// 7. Magic Matrices

function magicMatrices(arr = []) {
    let firstRow = arr[0].reduce((acc, curr) => acc + curr, 0);
    for (let index = 0; index < arr.length; index++) {
        let columnSum = 0;
        let rowSum = 0;
        rowSum = arr[index].reduce((acc, curr) => acc + curr, 0);
        for (let j = 0; j < arr.length; j++) {
            columnSum += arr[j][index];
        }

        if (rowSum !== columnSum || firstRow !== columnSum) {
            return false;
        }

    }

    return true;
}

console.log(magicMatrices([
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [1, 0, 0, 0]]
));

// 8. *Tic-Tac-Toe

/* 
    * main diagonal
    * secondary diagonal
    * column
    * row
*/

function tic_tac_toe(arr = []) {
    let dashBoard = [];
    for (let i = 0; i < 3; i++) {
        dashBoard[i] = [];
        for (let j = 0; j < 3; j++) {
            dashBoard[i].push('false');
        }
    }

    let i = 0;
    let takenPlace = false;
    let lastGuy = '';
    for (let curr = 0; curr < arr.length; curr++) {
        let [lilArray, index] = arr[curr].split(' ').map(x => +x);
        let falses = 0;

        dashBoard.forEach(array => {
            if (array.includes('false')) {
                falses++;
            }
        });

        if (falses > 0) {
            if (i % 2 === 0 && !takenPlace) {
                if (dashBoard[lilArray][index] === 'false') {
                    dashBoard[lilArray].splice(index, 1, 'X');
                } else {
                    console.log('This place is already taken. Please choose another!');
                    takenPlace = true;
                    lastGuy = 'X'
                    continue;
                }
            } else if (i % 2 !== 0 && !takenPlace) {
                if (dashBoard[lilArray][index] === 'false') {
                    dashBoard[lilArray].splice(index, 1, 'O');
                } else {
                    console.log('This place is already taken. Please choose another!');
                    takenPlace = true;
                    lastGuy = 'O';
                    continue;
                }
            } else {
                if (lastGuy === 'O') {
                    if (dashBoard[lilArray][index] === 'false') {
                        dashBoard[lilArray].splice(index, 1, 'O');
                    } else {
                        console.log('This place is already taken. Please choose another!');
                        takenPlace = true;
                        lastGuy = 'O';
                        continue;
                    }
                } else if (lastGuy === 'X') {
                    if (dashBoard[lilArray][index] === 'false') {
                        dashBoard[lilArray].splice(index, 1, 'X');
                    } else {
                        console.log('This place is already taken. Please choose another!');
                        takenPlace = true;
                        lastGuy = 'X'
                        continue;
                    }
                }
            }

            if (i >= 2) {
                let all = [];
                let row = new Set();
                let column = new Set();
                let mainDiagonal = new Set();
                let secondaryDiagonal = new Set();
                for (let i = 0; i < 3; i++) {
                    for (let j = 0, k = 2; j < 3; j++, k--) {
                        row.add(dashBoard[i][j]);
                        column.add(dashBoard[j][i]);

                        if (i === 0) {
                            mainDiagonal.add(dashBoard[j][j]);
                            secondaryDiagonal.add(dashBoard[j][k]);
                        }
                    }
                    all.push(row, column, mainDiagonal, secondaryDiagonal);
                    for (let object of all) {
                        if (object.size === 1) {
                            console.log(`Player ${Array.from(object).join('')} wins!`);
                            return dashBoard.forEach(array => console.log(array.join('\t')));
                        }
                    }
                }
            }
            i++;
            takenPlace = false;
        }
    }

    console.log('The game ended! Nobody wins :(');
    return dashBoard.forEach(array => console.log(array.join('\t')));

}

/* tic_tac_toe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
);
 
tic_tac_toe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
); */

tic_tac_toe(["0 1",
    "0 0",
    "0 2",
    "1 1",
    "2 1",
    "2 2"
]
);