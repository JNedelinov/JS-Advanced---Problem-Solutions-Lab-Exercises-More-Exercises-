function solve() {
   const searchInput = document.getElementById("searchField");
   const table = document.querySelector("tbody");
   document.getElementById("searchBtn").addEventListener("click", function () {
      Array.from(table.rows).forEach(row => {
         if (row.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
            row.classList.add("select");
         } else {
            row.classList.remove("select");
         }
      });
      searchInput.value = '';
   });
}

/*

tableRows.forEach(tr => tr.removeAttribute("class"));

   if (searchInput.value.trim().length > 0) {
      tableRows.forEach((tr, index) => {
      let tds = Array.from(document.querySelectorAll(`tbody tr:nth-child(${index + 1}) td`));
      for (let td of tds) {
         let tdText = td.textContent.trim();
         let inputText = searchInput.value.trim();
         if (tdText.toLowerCase().includes(inputText.toLowerCase()) && inputText !== '') {
            tr.classList.add("select");
            break;
         }
      }
   });
}

*/