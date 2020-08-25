function solve() {
   const mainArticleSection = document.querySelector("main section");

   const aside = document.querySelector("aside");

   const asideSections = aside.querySelectorAll("section");
   const newArticleSection = asideSections[0];

   const archiveSection = asideSections[1];

   const ul = archiveSection.querySelector("ul");
   archiveSection.removeChild(ul);
   const lis = [];

   const form = newArticleSection.querySelector("form");

   const inputs = form.querySelectorAll("input");
   const author = inputs[0];
   const title = inputs[1];
   const category = inputs[2];

   const content = form.querySelector("textarea");

   const asideBtn = form.querySelector("button");

   asideBtn.setAttribute("type", "submit");
   form.onsubmit = (e) => {
      e.preventDefault();
   }

   asideBtn.addEventListener("click", addArticle);

   function deleteArticle(e) {
      const currArticle = e.target.parentElement.parentElement;
      mainArticleSection.removeChild(currArticle);
   }

   function archiveArticle(e) {
      const currArticle = e.target.parentElement.parentElement;

      const titleOfCurrArticle = currArticle.querySelector("h1");

      const li = document.createElement("li");
      li.textContent = titleOfCurrArticle.textContent;

      let newUl = document.createElement("ul");

      let currUl;
      if (Array.from(archiveSection.children).includes(archiveSection.querySelector("ul"))) {
         currUl = archiveSection.querySelector("ul");
      }

      lis.push(li);

      if (lis.length > 1) {
         lis.sort((a, b) => a.textContent.localeCompare(b.textContent));
      }

      lis.forEach(liEl => newUl.appendChild(liEl));

      if (currUl !== undefined) {
         archiveSection.removeChild(currUl);
      }

      archiveSection.appendChild(newUl);

      mainArticleSection.removeChild(currArticle);
   }

   function addArticle(e) {
      const newArtcile = document.createElement("article");

      const h1 = document.createElement("h1");
      h1.textContent = title.value;

      const p1 = document.createElement("p");
      p1.textContent = "Category: ";
      const p1Strong = document.createElement("strong");
      p1Strong.textContent = category.value;
      p1.appendChild(p1Strong);

      const p2 = document.createElement("p");
      p2.textContent = "Creator: ";
      const p2Strong = document.createElement("strong");
      p2Strong.textContent = author.value;
      p2.appendChild(p2Strong);

      const p3 = document.createElement("p");
      p3.textContent = content.value;

      const div = document.createElement("div");
      div.classList.add("buttons");

      const btnDelete = document.createElement("button");
      btnDelete.addEventListener("click", deleteArticle);
      btnDelete.classList.add("btn", "delete");
      btnDelete.textContent = "Delete";

      const btnArchive = document.createElement("button");
      btnArchive.addEventListener("click", archiveArticle);
      btnArchive.classList.add("btn", "archive");
      btnArchive.textContent = "Archive";

      div.appendChild(btnDelete);
      div.appendChild(btnArchive);

      newArtcile.appendChild(h1);
      newArtcile.appendChild(p1);
      newArtcile.appendChild(p2);
      newArtcile.appendChild(p3);
      newArtcile.appendChild(div);

      mainArticleSection.appendChild(newArtcile);

      author.value = '';
      title.value = '';
      category.value = '';
      content.value = '';
   }
}
