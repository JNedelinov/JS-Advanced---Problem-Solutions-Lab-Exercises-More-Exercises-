function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}

// 2. Inheriting and Replacing toString

function inheritingAndReplacingToString() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    Person.prototype.toString = function () {
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
    }

    Teacher.prototype = Object.create(Person.prototype);
    Teacher.prototype.toString = function () {
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
    }

    Student.prototype = Object.create(Person.prototype);
    Student.prototype.toString = function () {
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
    }


    let newPerson = new Person('Jo', 'jo@gmail.com');
    let newTeacher = new Teacher('Iruka', 'irukaSensei@gmail.com', 'Ninjutsu');
    let newStudent = new Student('Stu', 'lilStu@gmail.com', 'rapping');

    console.log(newPerson.toString());
    console.log(newTeacher.toString());
    console.log(newStudent.toString());

    return {
        Person,
        Teacher,
        Student
    }
}

inheritingAndReplacingToString();

// 3. Extend Prototype

function extendPrototype(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

extendPrototype(class { });

// 4. Class Hierarchy

function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units; // m / 100 // mm * 10
        }

        changeUnits(newUnits) {
            this.units = newUnits;
        }

        transformMetrics(value) {
            if (this.units !== 'cm') {
                if (this.units === 'm') {
                    return value / 100;
                } else {
                    return value * 10;
                }
            } else {
                return value;
            }
        }

        get area() {
            throw new Error('Not implemented!');
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }

        get area() {
            const transformedRadius = this.transformMetrics(this.radius);
            return (Math.PI * transformedRadius) * transformedRadius;
        }

        toString() {
            let transformedRadius;
            if (this.units !== 'cm') {
                transformedRadius = this.transformMetrics(this.radius);
                return `Figures units: ${this.units} Area: ${this.area} - radius: ${transformedRadius}`;
            } else {
                return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
            }
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width
            this.height = height;
        }

        get area() {
            const transformedWidth = this.transformMetrics(this.width);
            const transformedHeight = this.transformMetrics(this.height);
            return transformedWidth * transformedHeight;
        }

        toString() {
            let transformedWidth;
            let transformedHeight;
            if (this.units !== 'cm') {
                transformedWidth = this.transformMetrics(this.width);
                transformedHeight = this.transformMetrics(this.height);
                return `Figures units: ${this.units} Area: ${this.area} - width: ${transformedWidth}, height: ${transformedHeight}`;
            } else {
                return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
            }
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
