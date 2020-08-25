// 4. Command Processor

function solution() {
    let string = '';

    function append(str) {
        return string += str;
    }

    function removeStart(n) {
        return string = string.slice(n);
    }

    function removeEnd(n) {
        return string = string.slice(0, string.length - n);
    }

    function print() {
        console.log(string);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}


/* let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print(); */


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();


// 1. Add

function addInsideNum(num) {
    const insideNum = num;

    function add(newN) {
        return insideNum + newN;
    }

    return add;
}

let add5 = addInsideNum(5);
console.log(add5(2));
console.log(add5(3));

// 2. Currency Format

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function result(fn) {
    const separator = ',';
    const symbol = '$';
    const symbolFirst = true;

    return fn.bind(null, separator, symbol, symbolFirst);
}

let dollarFormatter = result(currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71

// 3. Filter Employees 

function filterEmployees(data = [], criteria = '') {
    let criteriaData;
    let filteredEmployees;

    const parsedData = JSON.parse(data);
    /* console.log(parsedData); */
    if (criteria !== "all") {
        criteriaData = criteria.split('-');
        const cCriteriaProperty = criteriaData[0];
        const cPropertyValue = criteriaData[1];
        filteredEmployees = parsedData.filter(curr => curr[cCriteriaProperty] === cPropertyValue);
        filteredEmployees.forEach((empObj, index) => console.log(`${index}. ${empObj.first_name} ${empObj.last_name} - ${empObj.email}`));
    } else {
        parsedData.forEach((empObj, index) => console.log(`${index}. ${empObj.first_name} ${empObj.last_name} - ${empObj.email}`));
    }
}

/* filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
) */

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
)