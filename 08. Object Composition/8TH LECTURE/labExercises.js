// 1. Order Rectangles

function orderRectangles(arr = []) {
    // might do it with class

    const result = [];

    arr.forEach(array => {
        const [width, height] = array;

        result.push({ width, height, area, compareTo });
    });

    /* console.log(result[1].compareTo(result[0])); */
    /* console.log(result); */

    return result.sort((obj1, obj2) => {
        return obj1.compareTo(obj2);
    });

    function area() {
        return this.width * this.height;
    }

    function compareTo(obj) {
        const currArea = this.area();
        const otherArea = obj.area();
        return otherArea - currArea || obj.width - this.width;
    }
}

/* console.log(orderRectangles([[10,5],[5,12]]));
console.log(orderRectangles([[10,5], [3,20], [5,12]])); */
console.log(orderRectangles([[1, 20], [20, 1], [5, 3], [5, 3]]));


/* console.log(sortedRectangles[0].compareTo(sortedRectangles[1]));
    console.log(sortedRectangles[1].compareTo(sortedRectangles[0]));
    console.log(sortedRectangles[1].compareTo(sortedRectangles[2]));
    console.log(sortedRectangles[2].compareTo(sortedRectangles[1]));
    console.log(sortedRectangles[2].compareTo(sortedRectangles[3]));
    console.log(sortedRectangles[3].compareTo(sortedRectangles[2])); */

// 2. List Processor

function listProcessor(arr = []) {
    const obj = {
        array: [],
    };

    for (const line of arr) {

        const [command, str] = line.split(' ');

        switch (command) {
            case 'add': add.call(obj, str); break;
            case 'remove': remove.call(obj, str); break;
            case 'print': print.call(obj); break;
        }
    }

    function add(str) {
        return this.array.push(str);
    }

    function remove(str) {
        while (this.array.includes(str)) {
            this.array.splice(this.array.indexOf(str), 1);
        }
        return this.array;
    }

    function print() {
        console.log(this.array.join(','));
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);

// 3. Object Factory

function objectFactory(str) {
    let objectAray = JSON.parse(str);

    function assigningNewProps(obj1, obj2) {
        return { ...obj1, ...obj2 };
    }

    let newObj = objectAray.reduce((acc, curr) => assigningNewProps(acc, curr), {});

    return newObj;
}

objectFactory(`[{"prop1": 1},{"prop2":2},{"prop3":3}]`);
objectFactory(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`)
objectFactory(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`)

// 4. Cars

function cars(arr = []) {
    const obj = {};
    const arrOfObjs = [];

    for (const line of arr) {
        const [command, name, keyInherit, parentValue] = line.split(' ');

        switch (command) {
            case 'create': {
                if (keyInherit === undefined) {
                    create.call(obj, name);
                } else {
                    inherit.call(obj, name, parentValue);
                }
            }; break;
            case 'set': {
                setProp.call(obj, name, keyInherit, parentValue);
            }; break;
            case 'print': {
                print.call(obj, name);
            }; break
        }
    }

    function create(name) {
        return this[name] = {};
    }

    function inherit(name, parent) {
        if (this[parent]) {
            this[name] = Object.create(this[parent]);
        }
    }

    function setProp(name, key, value) {
        if (this[name]) {
            return this[name][key] = value;
        }
    }

    function print(name) {
        Object.keys(this).forEach(key => {
            if (key === name) {
                let newArr = [];
                for (const innerKey in this[key]) {
                    newArr.push(`${innerKey}:${this[key][innerKey]}`);
                }
                console.log(newArr.join(', '));
            }
        });
        
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);

// 5. Sum

