function create(words) {
   let div = document.querySelector("#content");
   words.forEach(word => {
      let newDiv = document.createElement("div");
      let paragraph = document.createElement("p");
      paragraph.style.display = 'none';
      paragraph.textContent = word;
      newDiv.appendChild(paragraph);
      newDiv.addEventListener("click", e => newDiv.firstChild.style.display = "block");
      div.appendChild(newDiv);
   });
}