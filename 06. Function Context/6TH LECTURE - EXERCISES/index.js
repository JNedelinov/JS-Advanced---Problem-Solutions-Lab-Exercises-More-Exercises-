function solve() {
   const table = document.querySelector(".minimalistBlack tbody");
   const rows = Array.from(table.getElementsByTagName("tr"));

   rows.forEach(row => {
      row.addEventListener("click", rowClickFn);
   });

   function rowClickFn(e) {
      let element = e.target === 'tr' ? rows[rows.indexOf(e.target)] : e.target.parentElement;

      rows.forEach(row => {
         if (!row.hasAttribute("style")) {
            row.removeAttribute("style");
         }
      });

      if (!element.hasAttribute("style")) {
         rows.forEach(row => row.removeAttribute("style"));
         element.setAttribute("style", "background-color: #413f5e;");
      } else {
         element.removeAttribute("style");
      }
   }

}

// tries 


// console.log(newArr);

// if (!e.target.parentElement.hasAttribute("style") && e.target.parentElement === "tr"/*  || e.target === 'td') */) {
//    e.target.parentElement.setAttribute("style", "background-color: #413f5e;");
//    rows.filter(row => !row.hasAttribute("style"))
//       .forEach(row => row.removeAttribute("style"));
// }