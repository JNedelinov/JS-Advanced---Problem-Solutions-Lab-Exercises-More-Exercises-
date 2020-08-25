// 3. Bank

// Class Exercise

class Bank {
    #privateObj = {};

    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer = {}) {
        if (this.#privateObj[customer.personalId]) {
            throw Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        } else {
            this.#privateObj[customer.personalId] = customer;
            this.allCustomers.push(customer);
            return customer;
        }
    }

    depositMoney(personalId, amount) {
        if (this.#privateObj[personalId]) {
            for (const customer of this.allCustomers) {
                if (customer.personalId === personalId) {
                    if (customer.hasOwnProperty('totalMoney')) {
                        customer.totalMoney += amount;
                    } else {
                        customer.totalMoney = amount;
                    }

                    if (customer.hasOwnProperty("transactions")) {
                        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`)
                    } else {
                        customer.transactions = [];
                        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`)
                    }

                    return customer.totalMoney + '$';
                }

            }

        } else {
            throw Error("We have no customer with this ID!");
        }

    }

    withdrawMoney(personalId, amount) {
        if (this.#privateObj[personalId]) {
            for (const customer of this.allCustomers) {
                if (customer.personalId === personalId) {
                    if (customer.hasOwnProperty('totalMoney')) {
                        if (customer.totalMoney >= amount) {
                            customer.totalMoney -= amount;
                        } else {
                            throw Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
                        }

                    }

                    if (customer.hasOwnProperty("transactions")) {
                        customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`)
                    } else {
                        customer.transactions = [];
                        customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`)
                    }

                    return customer.totalMoney + '$';
                }

            }

        } else {
            throw Error("We have no customer with this ID!");
        }

    }

    customerInfo(personalId) {
        if (this.#privateObj[personalId]) {
            let result = [];

            result.push(`Bank name: ${this.bankName}`);
            result.push(`Customer name: ${this.#privateObj[personalId].firstName} ${this.#privateObj[personalId].lastName}`);
            result.push(`Customer ID: ${personalId}`);
            result.push(`Total Money: ${this.#privateObj[personalId].totalMoney}$`);
            result.push('Transactions:');
            let length = this.#privateObj[personalId].transactions.length;
            let arr = this.#privateObj[personalId].transactions.slice(0);
            for (let i = length; i > 0; i--) {
                result.push(`${i}. ${arr[i - 1]}`);
            }

            return result.join('\n');
        }
    }

    get privateObj() {
        return this.#privateObj;
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
console.log(bank.privateObj);
/* console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 })); */
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(4151596));