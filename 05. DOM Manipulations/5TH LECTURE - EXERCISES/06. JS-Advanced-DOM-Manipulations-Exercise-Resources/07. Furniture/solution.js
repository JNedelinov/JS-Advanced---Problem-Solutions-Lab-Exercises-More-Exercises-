function solve() {
  let input = document.querySelectorAll("#exercise textarea")[0];
  let ths = document.querySelectorAll("table thead th");
  let table = document.querySelector("tbody");

  let buttons = document.querySelectorAll("#exercise button");
  buttons[0].addEventListener("click", firstFunction);
  buttons[1].addEventListener("click", secondFunction);

  function firstFunction() {
    const json = JSON.parse(input.value);
    const keys = Object.keys(json[0]);

    for (let obj of json) {
      let newRow = document.createElement("tr");
      Array.from(ths).forEach(th => {

        let td = document.createElement("td");
        let elementInTd;
        let thText = th.textContent.toLowerCase();

        if (thText === 'mark') {
          elementInTd = document.createElement("input");
          elementInTd.setAttribute("type", "checkbox");
        } else if (thText === 'image') {
          elementInTd = document.createElement("img");
          elementInTd.setAttribute("src", `${obj.img}`);
        } else if (thText === 'name') { 
          elementInTd = document.createElement("p");
          elementInTd.textContent = obj.name;
        } else if (thText === 'decoration factor') {
          elementInTd = document.createElement("p");
          elementInTd.textContent = obj.decFactor;
        } else if (thText === 'price') {
          elementInTd = document.createElement("p");
          elementInTd.textContent = obj.price;
        }

        td.appendChild(elementInTd);
        newRow.appendChild(td);
      });
      table.appendChild(newRow);

    }
/* 
    input.value = ''; */
  }

  function secondFunction() {
    let boughtFurniture = [];
    let totalPrice = 0;
    let averageDFactor = 0;

    let checkBoxes = document.querySelectorAll("input[type=checkbox]");
    Array.from(checkBoxes).forEach((checkbox, index) => {
      if (checkbox.checked) {
        let currRow = table.rows[index];
        let tds = currRow.querySelectorAll("td");
        Array.from(tds).forEach((td, index) => {
          let thText = ths[index].textContent.toLowerCase();
          let tdText = td.textContent;
          if (thText === "name") {
            boughtFurniture.push(tdText);
          } else if (thText === "price") {
            totalPrice += Number(tdText);
          } else if (thText === "decoration factor") {
            averageDFactor += Number(tdText);
          }
        });
      }
    });

    averageDFactor /= boughtFurniture.length;

    document.querySelectorAll("#exercise textarea")[1].value =
      `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDFactor.toFixed(2)}`;
  }
}