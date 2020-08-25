// 1. Company

class Company {
    constructor() {
        this.departments = [];
        // тук мога да си сложа един обект и да си работя с него, като после в bestDepartment ще ми е по-лесно да го използвам
    }
    addEmployee(userName, salary, position, department) {
        if (!userName || !salary || !position || !department) { throw new Error("Invalid input!"); };
        if (salary < 0) { throw new Error(" Invalid input!"); }

        const newEmployee = {
            userName: userName,
            salary: salary,
            position: position,
            department: department,
        }

        this.departments.push(newEmployee);
        return `New employee is hired. Name: ${userName}. Position: ${position}`;
    }

    bestDepartment() {
        let result = '';
        let newObj = {};
        this.departments.forEach(obj => {
            let department = obj.department;
            if (!newObj[department]) {
                newObj[department] = {};
                newObj[department]["total"] = obj.salary;
                newObj[department]["count"] = 1;
            } else {
                newObj[department]["total"] += obj.salary;
                newObj[department]["count"]++;
            }
        });

        let highestEarningDep = Object.keys(newObj).sort((a, b) => {
            let firstEmp = newObj[a].total / newObj[a].count;
            let secondEmp = newObj[b].total / newObj[b].count;
            if (firstEmp - secondEmp === 0) {
                return a.localeCompare(b);
            }
            return secondEmp - firstEmp;
        })[0];

        result += `Best Department is: ${highestEarningDep}`;

        let averageSalaryOfDep = newObj[highestEarningDep]["total"] / newObj[highestEarningDep]["count"];

        result += `\nAverage salary: ${averageSalaryOfDep.toFixed(2)}`;

        let newArr = this.departments
            .filter(obj => obj.department === highestEarningDep)
            .sort((a, b) => {
                if (a.salary - b.salary === 0) {
                    return a.userName.localeCompare(b.userName);
                }
                return b.salary - a.salary;
            })
            .forEach(employee => result += `\n${employee.userName} ${employee.salary} ${employee.position}`)

        return result;
    }
}

let c = new Company();

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());

/* let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment()); */


/* let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
console.log(c.addEmployee("", 500, "dyer", "Construction"));
console.log(c.addEmployee("Stan", 0, "architect", "Construction"));
console.log(c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"));
console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources")); */


/* let obj = {};
        this.departments.forEach(lilObj => {
            if (!obj[lilObj.department]) {
                obj[lilObj.department] = {
                    userName: lilObj.userName,
                    salary: lilObj.salary,
                    position: lilObj.position,
                };
            }
            obj[lilObj.department] = {
                userName: lilObj.userName,
                salary: lilObj.salary,
                position: lilObj.position,
            }
            console.log(obj);
        }); */


/* if (!this.obj[department]) {
    this.obj[department] = {
        userName: userName,
        salary: salary,
        position: position,
        total: salary,
    }
} else {
    this.obj[department]["total"] += salary;
} */




/* return this.departments.reduce(function (acc, curr) {
    let bestDepartment = this.departments.reduce((a, b) => {
        if (a.department === b.department) {
            return a[a.department]["salary"] +=  b[b.department]["salary"]
        }
    }, {}).bind(this);
}, ''); */







// 2. Fibonacci

// function getFibonator() {
//     const obj = { n: 0 };
//     let a = 1; // the current number
//     let b = 1; // the next number
//     let curr = getCurr.apply(obj);
//     return () => {
//         [curr, a, b] = [a, b, a + b];
//         return obj.n = curr;
//     }
    
//     function getCurr() {
//         return this.n;
//     }
// }

function getFibonator() {
    let current = 0;
    let next = 1;
    return () => {
        let nextAfterNext = current + next;
        current = next;
        next = nextAfterNext;
        
        return current;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

/* 
function fibonacci(n) {
    if (n < 0) {
        return 'Incorrect input';
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
 */

// let curr = getCurr.apply(obj);
//         count++;
//         if (count === 0) {
//             return obj.n = 1;
//         } else if (count === 1) {
//             return obj.n = count;
//         } else {
//             return obj.n = count - curr + 1;
           
//             /* return obj.n = curr - 1 + count - curr; */
//         }
//         count++;

/* obj.n++; */
/* return () => { */
/* let previousElement = getPrevious.apply(obj);
let nextElement = getNextElement.apply(obj); */
        // let firstTerm = currEl/* obj.n */ - 1 < 0 ? 0 : currEl/* obj.n */ - 1;
        // let secondTerm = currEl/* obj.n */ - 2 < 0 ? 0 : currEl/* obj.n */ - 2;
        // return obj.n/* obj.n */ = firstTerm + secondTerm;

/* return obj.n = previousElement + nextElement; */
/* } */
/* return obj.n++; */






// 3. HEX

class Hex {
    constructor (number) {
        this.number = number;
    }

    toString() {
        return `0x${this.number.toString(16).toUpperCase()}`;
    }

    valueOf() {
        return this.number;
    }

    plus(obj) {
        let recievedNumber = this.valueOf.apply(obj);
        return new Hex (this.number + recievedNumber);
    }

    minus(obj) {
        let recievedNumber = this.valueOf.apply(obj);
        return new Hex (this.number - recievedNumber);
    }

    parse(string) {
        return parseInt(string);
    }

}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
/*
// за да мога да използвам правилно the method chaining, 
трябва първия метод да ми върне обект, който е със същия клас, 
за да мога да call-на следващия метод (отдолу) или 

    a.plus(b).toString(); 


 */
let hexadecimalNum = a.plus(b).toString(); 
console.log(a.parse(hexadecimalNum));
console.log(a.plus(b).toString()==='0xF');
