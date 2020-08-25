if (!Object.values(this.petsObj[petName]).join('') === (ownerName)) {
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