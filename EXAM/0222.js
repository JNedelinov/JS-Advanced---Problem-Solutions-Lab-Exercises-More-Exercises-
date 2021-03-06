class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];

        this.totalProfit = 0;
        this.currentWorkload = 0;

        this.obj = {};

        this.ownerObj = {};
        this.petsObj = {};
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.clients.length + 1 > this.capacity) {
            throw Error("Sorry, we are not able to accept more patients!");
        }

        if (!this.obj[ownerName]) {
            this.ownerObj[ownerName] = [];
            this.obj[ownerName] = { ownerName };
            this.obj[ownerName][petName] = { petName, kind, procedures };
            this.obj[ownerName]['pets'] = [];
        }

        if (!this.petsObj[petName]) {
            this.petsObj[petName] = ownerName;
        }

        if (this.ownerObj[ownerName].includes(petName) && this.obj[ownerName][petName].procedures.length > 0) {
            throw Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${this.obj[ownerName][petName].procedures.join(', ')}.`);
        } else {
            this.clients.push({ [ownerName]: petName });
            this.obj[ownerName][petName] = { petName, kind, procedures };
            this.ownerObj[ownerName].push(petName);
            this.obj[ownerName]['pets'].push(petName);

            this.currentWorkload++;

            return `Welcome ${petName}!`;
        }

    }

    onLeaving(ownerName, petName) {
        if (!this.obj[ownerName]) {
            throw Error("Sorry, there is no such client!");
        }

        if (!this.ownerObj[ownerName].includes(petName)) {
            throw Error(`Sorry, there are no procedures for ${petName}!`);
        } else if (this.obj[ownerName][petName].procedures.length === 0) {
            throw Error(`Sorry, there are no procedures for ${petName}!`);
        } else {
            let currBill = 0;
            this.obj[ownerName][petName].procedures.forEach(procedure => {
                currBill += 500.00;
            })
            this.currentWorkload--;
            this.totalProfit += currBill;
            this.obj[ownerName][petName].procedures = [];

            return `Goodbye ${petName}. Stay safe!`;
        }
    }

    toString() {
        let arrRes = [];

        let petsHavingProcedures = 0;

        Object.keys(this.obj).forEach(client => {
            this.obj[client]['pets'].forEach(pet => {
                if (this.obj[client][pet].procedures.length > 0) {
                    petsHavingProcedures++;
                }
            });
        });

        arrRes.push(`${this.clinicName} is ${Math.floor((petsHavingProcedures / this.capacity) * 100)}% busy today!`);
        arrRes.push(`Total profit: ${this.totalProfit.toFixed(2)}$`);

        let sortedOwners = Object.keys(this.obj).sort((a, b) => a.localeCompare(b));

        sortedOwners.forEach(client => {
            arrRes.push(`${client} with:`);

            let sortedPets = this.obj[client]['pets'].sort((a, b) => a.localeCompare(b));

            sortedPets.forEach(pet => {
                arrRes.push(`---${pet} - a ${(this.obj[client][pet].kind).toLowerCase()} that needs: ${this.obj[client][pet].procedures.join(', ')}`);
            });
        });

        return arrRes.join('\n');
    }

}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
/* console.log(clinic.onLeaving('Jim Jones', 'Tiny')); */
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
clinic.newCustomer('John Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.onLeaving('Jim Jones', 'Tom'));
console.log(clinic.onLeaving('John Jones', 'Tom'));

console.log(clinic.toString());