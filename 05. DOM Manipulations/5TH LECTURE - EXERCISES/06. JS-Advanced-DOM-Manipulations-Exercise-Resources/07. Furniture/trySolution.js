function solve() {
    let input = document.querySelectorAll("#exercise textarea")[0];
    let ths = document.querySelectorAll("table thead th");
  
    document.querySelectorAll("#exercise button")[0].addEventListener("click", e => {
      const json = JSON.parse(input.value);
      const keys = Object.keys(json[0]);
      console.log(keys);
      let table = document.querySelector("tbody");
  
      for (let obj in json) {
        let currObj = json[obj];
        console.log(currObj);
        let newRow = document.createElement("tr");
        let length = Object.keys(currObj).length;
        Array.from(ths).forEach((th, index) => {
          let td = document.createElement("td");
          let elementInTd;
          if (th.textContent.toLowerCase() === 'mark') {
            elementInTd = document.createElement("input");
            elementInTd.setAttribute("type", "checkbox");
          } else {
            /* elementInTd = document.createElement(`${keys[index]}`);
            console.log(elementInTd); */
            /* console.log(ths[index].textContent);
            console.log(currObj[keys[index]]); */
            switch (th.textContent.toLowerCase()) {
              case 'image': {
                elementInTd = document.createElement("img");
                elementInTd.setAttribute("src", `${currObj[keys[index]]}`) 
              }; break;
              case 'name':
              case 'price':
              case 'decoration factor': { 
                elementInTd = document.createElement("p");
                elementInTd.textContent = currObj[keys[index]];
              }; break;
            }
          }
          td.appendChild(elementInTd);
          newRow.appendChild(td);
        })
        table.appendChild(newRow);
  
        console.log(table)
        /* for (let i = 1; i <= length; i++) {
          let td = document.createElement("td");
          if (i === 1) {
            let imgEl = document.createElement("img");
            imgEl.setAttribute("src", `${currObj[i]}`)
          } else if (i === length) {
  
          }
        } */
      }
  
      input.value = '';
    });
  }