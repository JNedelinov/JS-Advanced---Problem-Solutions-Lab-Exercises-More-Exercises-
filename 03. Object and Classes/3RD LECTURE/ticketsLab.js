function tickets(arr = [], sortCriteria = '') {
    let map = new Map();
    /* let obj = {}; */
    let result = [];

    for (let line of arr) {
        let [_destination, _price, _status] = line.split('|');
        _price = +(_price);

        let obj = {
            destination: _destination,
            price: _price,
            status: _status,
        };

        result.push(obj);
    }

    let sortedByCriteria = result.sort((a, b) => {
        if (sortCriteria === 'destination' || sortCriteria === 'status') {
            return a[sortCriteria].localeCompare(b[sortCriteria]);
        } else {
            return a[sortCriteria] - b[sortCriteria];
        }
    });

    /* sortedByCriteria.forEach(obj => {
        console.log(`Ticket ${JSON.parse((JSON.stringify(obj)))}`);
    }); */

    return sortedByCriteria;

    /* let newArr = [];

    sortedByCriteria.forEach(obj => {
        newArr.push('Ticket', obj);
    });
 */
    
}