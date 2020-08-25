class ChristmasDinner {
    constructor(budget) {

        if (budget < 0) {
            throw Error("The budget cannot be a negative number");
        } else {
            this.budget = budget;
        }

        this.dishes = [];
        this.products = [];
        this.guests = [];

    }

    shopping(products = []) {
        let [type, price] = products;
        price = Number(price);

        if (this.budget - price < 0) {
            throw Error("Not enough money to buy this product");
        }

        this.products.push(type);
        this.budget = this.budget - price;

        return `You have successfully bought ${type}!`;
    }

    recipes(obj = {}) {
        let { recipeName, productsList } = obj;

        let enoughProducts = 0;

        for (const product of this.products) {
            if (productsList.includes(product)) {
                enoughProducts++;
            }
        }

        if (enoughProducts === productsList.length) {
            this.dishes.push({ recipeName, productsList });
            return `${recipeName} has been successfully cooked!`;
        }

        throw Error("We do not have this product");
    }

    inviteGuests(name, dish) {
        let dishIsHere = false;
        for (const dishObj of this.dishes) {
            if (dishObj.recipeName === dish) {
                dishIsHere = true;
                break;
            }
        }

        if (dishIsHere) {
            for (const guestObj of this.guests) {
                if (guestObj[name]) {
                    throw Error("This guest has already been invited");
                }
            }

            let newObj = {};
            newObj[name] = dish;
            this.guests.push(newObj);

            return `You have successfully invited ${name}!`;
        } else {
            return 'We do not have this dish';
        }
    }

    showAttendance() {
        let string = '';

        this.guests.forEach((guest, index, arr) => {
            let name = Object.keys(guest)[0];
            string += `${name} will eat ${guest[name]}, which consists of `;
            for (const dish of this.dishes) {
                if (dish.recipeName === guest[name]) {
                    if (index === arr.length - 1) {
                        string += `${dish.productsList.join(', ')}`;
                    } else {
                        string += `${dish.productsList.join(', ')}\n`;
                    }

                    break;
                }
            }
        })

        return string;
    }

}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
