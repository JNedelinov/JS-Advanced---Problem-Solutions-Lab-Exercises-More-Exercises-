/* function solve() {
    const selector1 = document.getElementById("num1");
    const selector2 = document.getElementById("num2");
    const resultSelector = document.getElementById("result");

    const sumButton = document.getElementById("sumButton");
    const subtractButton = document.getElementById("subtractButton");

    const obj = {
        init(selector) {
            return this[selector.id] = Number(selector.value);
        },
    
        add(num1, num2) {
            return this[num1.id] + this[num2.id];
        },
    
        subtract(num1, num2) {
            return this[num1.id] - this[num2.id];
        }
    };

    selector1.addEventListener("input", () => {
        obj.init(selector1);
    });

    selector2.addEventListener("input", () => {
        obj.init(selector2);
    });

    sumButton.addEventListener("click", () => {
        if (selector1.value !== '' && selector2.value !== '') {
            resultSelector.value = obj.add(selector1, selector2);
        }
    });

    subtractButton.addEventListener("click", () => {
        if (selector1.value !== '' && selector2.value !== '') {
            resultSelector.value = obj.subtract(selector1, selector2);
        }
    });
    
    return obj;
} */


/* function solve() {
    const selector1 = document.getElementById("num1");
    const selector2 = document.getElementById("num2");
    const resultSelector = document.getElementById("result");

    // return {
    function init(selector1, selector2, resultSelector) {
        return {
            [selector1.id]: selector1.value,
            [selector2.id] : selector2.value,
            [resultSelector.id] : 0,

            add() {
                return this[resultSelector.id] = this[selector1.id] + this[selector2.id];
            },
            subtract() {
                return this[resultSelector.id] = this[selector1.id] - this[selector2.id];
            },
        }
    };
    
    // }
} */

function solve() {
    const selector1 = document.getElementById("num1");
    const selector2 = document.getElementById("num2");
    const resultSelector = document.getElementById("result");

    selector1.addEventListener("input", () => {
        init.call(obj, selector1);
    });

    selector2.addEventListener("input", () => {
        init.call(obj, selector2);
    });

    return {
        init(selector1, selector2, resultSelector) {
            this[selector1.id] = selector1.value;
            this[selector2.id] = selector2.value;
            this[resultSelector.id] = 0;
        },
        add() {
            return this[resultSelector.id] = this[selector1.id] + this[selector2.id];
        },
        subtract() {
            return this[resultSelector.id] = this[selector1.id] - this[selector2.id];
        }
    }
}