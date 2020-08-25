// 1. Heroes

function solve() {
    return {
        mage(name) {
            return this[name] = {
                name: name,
                health: 100,
                mana: 100,
                cast(spell) {
                    console.log(`${this.name} cast ${spell}`);
                    return this.mana -= 1;
                }
            }
        },
        fighter(name) {
            return this[name] = {
                name: name,
                health: 100,
                stamina: 100,
                fight() {
                    console.log(`${this.name} slashes at the foe`);
                    return this.stamina -= 1;
                }
            }
        }
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);

// 2. Construction Crew

function conCrew(obj) {
    if (obj.dizziness) {
        const reqAmoint = (0.1 * obj.weight * obj.experience) + obj.levelOfHydrated;
        levelOfHydrated = reqAmoint;
        dizziness = false;
        return Object.assign(obj, { levelOfHydrated, dizziness });
    } else {
        return obj;
    }
}

console.log(conCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
));

// 3. Car Factory

function carFactory(obj) {
    return Object.keys(obj).reduce((acc, curr) => {
        switch (curr) {
            case 'model': acc[curr] = obj[curr]; break;
            case 'power': return engineState(acc, curr);
            case 'color': return carriageSetter(acc, curr);
            case 'carriage': return carriageSetter(acc, curr);
            case 'wheelsize': return wheelsizer(acc, curr)
        }
        return acc;
    }, {});

    function model(acc, curr) {
        return acc[curr] = obj[curr];
    }

    function engineState(acc, curr) {
        let power = obj[curr];
        let volume = 0;
        if (obj[curr] < 110) {
            power = 90;
            volume = 1800;
        } else if (obj[curr] >= 110 && obj[curr] < 200) {
            power = 120;
            volume = 2400;
        } else if (obj[curr] >= 200) {
            power = 200;
            volume = 3500
        }
        const temp = {
            engine: {
                power,
                volume,
            }
        }
        return Object.assign(acc, temp);
    }

    function carriageSetter(acc, curr) {
        if (!acc.carriage) {
            acc["carriage"] = { [curr]: obj[curr] };
        } else {
            acc.carriage["type"] = obj[curr];
        }
        return acc;
    }

    function wheelsizer(acc, curr) {
        let wheelsize = obj[curr];
        if (wheelsize % 2 === 0) {
            wheelsize -= 1;
        }

        const wheels = [];
        for (let i = 0; i < 4; i++) {
            wheels.push(wheelsize);
        }

        acc['wheels'] = wheels;
        return acc;
    }
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));

// 4. Extensible Object

function extensibleObj() {

    // създаваме обект със зададен прототип
    const proto = {};

    const instance = Object.create(proto);

    // const instance = Object.create({});
    // const proto = Object.getPrototypeOf(instance);

    // дефинираме функция, копираща свойства и методи
    instance.exted = function (template) {
        // обхождаме шаблона (template)
        for (let prop in template) {
            if (typeof template[prop] === 'function') {
                // ако е функция, копираме върху прототипа
                proto[prop] = template[prop];
            } else {
                // иначе копираме върху инстанцията
                instance[prop] = template[prop];
            }
        }
    };

    return instance;
}

// 5. String Extension

(function solving() {
    String.prototype.ensureStart = function () {
        let string = arguments[0];
        if (!this.toString().startsWith(string)) {
            string = string.trim();
            return string += ` ${this}`;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function () {
        let string = arguments[0];
        if (!this.toString().includes(string)) {
            string = string.trim();
            return this + ` ${string}`;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.toString() === '' ? true : false;
    };

    String.prototype.truncate = function () {
        let n = Number(arguments[0]);
        let str = this.toString();
        if (str.length < n) {
            return str.toString();
        } /* else {
            if (str.includes(' ')) {
                let strArr = str.split(' ');

                strArr.pop();
                let string = strArr.join(' ') + '...';

                if (string.length - 1 <= n) {
                    return string;
                }
                return string;
            }  */else {
            if (str.length > n && n >= 4) {
                let indexOfFirstSpace = str.indexOf(' ');

                if (indexOfFirstSpace > 0 && indexOfFirstSpace < str.length) {
                    let strArr = str.split(' ');
                    if (strArr.length === 1) {
                        str = str.slice(0, indexOfFirstSpace);
                    } else {
                        let strArr = str.split(' ');
                        if (!str.slice(0, indexOfFirstSpace).includes(' ')) {
                            str = str.slice(0, indexOfFirstSpace);
                        } else {
                            return str.substring(0, n - 3) + '...';
                        }
                        return str + '...';
                    }
                } else {
                    return '.'.repeat(n);
                }
            }
        }
    };

    String.format = function (str, ...params) {
        let i = 0;
        strArr = str.split(' ');
        strArr = strArr.map(el => {
            if ((/\{\d+\}/g).test(el)) {
                if (params[i] !== undefined) {
                    el = `${params[i]}`;
                    i++;
                }
            }
            return el;
        });

        return strArr.join(' ');
    }

}());

let str = 'the quick brown fox jumps over the lazy dog';
str = str.truncate(10);
console.log(str);
str = str.ensureStart('the ');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
console.log(''.isEmpty());
str.isEmpty();
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}', 'dog');
console.log(str);
