// 1. Array Extension

(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n, this.length); // this.length - 1
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n + 1); // n
    };

    Array.prototype.sum = function () {
        return this.reduce((acc, curr) => acc + curr, 0);
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
}());

let myArr = [1, 2, 3];

console.log(myArr.last());
console.log(myArr.skip(1));
console.log(myArr.take(2));
console.log(myArr.sum());
console.log(myArr.average());

// 2. Balloons

function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength,
            };
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    }
}

// // 3. People

// class Employee {
//     constructor(name, age, tasks) {
//         this.name = name;
//         this.age = age;
//         this.salary = 0;
//         this.tasks = tasks;
//     }

//     work() {
//         return this.tasks.forEach(task => console.log(`${this.name} is working on a ${task}`));
//     }

//     collectSalary() {
//         return `${this.name} recieved ${this.salary + bonuses} this month.`;
//     }
// }

// class Junior extends Employee {
//     constructor(name, age, tasks) {
//         super(name, age);
//         this.tasks = tasks;
//     }

//     /* work() {} */
// }
// class Senior extends Employee {
//     constructor(name, age, tasks) {
//         super(name, age);
//         this.tasks = tasks;
//     }

//     /* work() {} */
// }
// class Manager extends Employee {
//     constructor(name, age, tasks) {
//         super(name, age);

//         this.tasks = tasks;

//         this.dividend = 0;
//     }

//     /* work() {} */
// }

// let newJr = new Junior('pa', 3, ['simple task', 'complicated task']);
// console.log(newJr);
// console.log(newJr.salary);
// newJr.work();

// 4. Posts

// function posts() {

//     class Post {
//         constructor(title, content) {
//             this.title = title;
//             this.content = content;
//         }

//         toString() {
//             let result = '';
//             result += `Post: ${this.title}`;
//             result += `\nContent: ${this.content}`;
//             return result;
//         }
//     }

//     class SocialMediaPost extends Post {
//         constructor(title, content, likes, dislikes) {
//             super(title, content);

//             this.likes = likes;
//             this.dislikes = dislikes;

//             this.comments = [];
//         }

//         addComment(comment) {
//             this.comments.push(comment);
//             return this;
//         }

//         toString() {
//             let result = '';
//             result += `Post: ${this.title}`;
//             result += `\nContent: ${this.content}`;
//             result += `\nRating: ${this.likes - this.dislikes}`;
//             if (this.comments.length > 0) {
//                 result += ('\nComments:');
//                 this.comments.forEach(cmnt => result += (`\n * ${cmnt}`));
//             }
//             return result;
//         }
//     }

//     class BlogPost extends Post {
//         constructor(title, content, views) {
//             super(title, content);

//             this['views'] = views;
//         }

//         view() {
//             this.views++;
//             return this;
//         }

//         toString() {
//             let result = '';
//             result += `Post: ${this.title}`;
//             result += `\nContent: ${this.content}`;
//             result += `\nViews: ${this.views}`;
//             return result;
//         }
//     }

//     return {
//         Post,
//         SocialMediaPost,
//         BlogPost
//     }

// };

// let post = new Post("Post", "Content");

// console.log(post.toString());

// // Post: Post
// // Content: Content

// let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
// let bp = new BlogPost("TestTitle", "TestContent", 22);

// bp.view();
// bp.view();
// bp.view();
// bp.view();
// bp.view();

// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");

// console.log(scm.toString());
// console.log(bp.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

// 3. People

function people() {

    const juniorTasks = [" is working on a simple task."];
    const seniorTasks = [
        " is working on a complicated task.",
        " is taking time off work.",
        " is supervising junior workers."
    ];
    const managerTasks = [
        " scheduled a meeting.",
        " is preparing a quarterly report."
    ];

    class Employee {
        constructor(name, age) {

            if (new.target === Employee) {
                throw new Error('Cannot instantiate directly.');
            }

            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            if (this instanceof Junior) {
                let currTask = juniorTasks.shift();
                console.log(this.name + currTask);
                juniorTasks.push(currTask);
            } else if (this instanceof Senior) {
                let currTask = seniorTasks.shift();
                console.log(this.name + currTask);
                seniorTasks.push(currTask);
            } else if (this instanceof Manager) {
                let currTask = managerTasks.shift();
                console.log(this.name + currTask);
                managerTasks.push(currTask);
            }

            return this;
        }

        collectSalary() {
            if (this instanceof Manager) {
                console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
            } else {
                console.log(`${this.name} received ${this.salary} this month.`);
            }

            return this;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
        }
    }

    class Manager extends Employee {
        constructor(name, age, dividend) {
            super(name, age);

            this.dividend = 0;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager,
    }
}

const classes = people();

let newJr = new classes.Junior('J', 22);
newJr.salary = 1200;
newJr.collectSalary();
newJr.work();
newJr.work();
newJr.work();
newJr.work();
let newSr = new classes.Senior('J', 22);
let newMn = new classes.Manager('J', 22);
newMn.salary = 3000;
newMn.dividend = 500;
newMn.collectSalary();