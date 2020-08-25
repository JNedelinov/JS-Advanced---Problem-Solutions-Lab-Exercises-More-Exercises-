function solve() {
   const cards = [...document.querySelectorAll("img")];
   cards.forEach(card => card.addEventListener(("click"), functionallity));

   const cards1stPlayer = [...document.querySelectorAll("#player1Div img")];
   const cards2ndPlayer = [...document.querySelectorAll("#player2Div img")];

   const player1Div = document.getElementById("player1Div");
   const player2Div = document.getElementById("player2Div");

   const divResult = document.getElementById("result");

   const divHistory = document.getElementById("history");
   let comparisons = [];

   let cardOne;
   let firstPlayerSpan = divResult.querySelectorAll('span')[0];

   let cardTwo;
   let secondPlayerSpan = divResult.querySelectorAll('span')[2];

   function functionallity(e) {
      if (e.target.parentElement.id === "player1Div") {
         if (e.target.getAttributeNode("src").value === 'images/card.jpg') {
            e.target.getAttributeNode("src").value = 'images/whiteCard.jpg';
            firstPlayerSpan.textContent = e.target.name;
            cardOne = true;
         } else {
            e.target.getAttributeNode("src").value = 'images/card.jpg';
            firstPlayerSpan.textContent = '';
            cardOne = false;
         }
      } else if (e.target.parentElement.id === "player2Div") {
         if (e.target.getAttributeNode("src").value === 'images/card.jpg') {
            e.target.getAttributeNode("src").value = 'images/whiteCard.jpg';
            secondPlayerSpan.textContent = e.target.name;
            cardTwo = true;
         } else {
            e.target.getAttributeNode("src").value = 'images/card.jpg';
            secondPlayerSpan.textContent = '';
            cardTwo = false;
         }
      }

      e.target.style.border = '';

      if (cardOne && cardTwo) {
         let fCard = cards1stPlayer.filter(card => card.name === firstPlayerSpan.textContent)[0];
         let sCard = cards2ndPlayer.filter(card => card.name === secondPlayerSpan.textContent)[0];

         if (Number(firstPlayerSpan.textContent) > Number(secondPlayerSpan.textContent)) {
            fCard.style.border = '2px solid green';
            sCard.style.border = '2px solid red';
         } else if (Number(firstPlayerSpan.textContent) < Number(secondPlayerSpan.textContent)) {
            fCard.style.border = '2px solid red';
            sCard.style.border = '2px solid green';
         } else {
            fCard.style.border = '2px solid green';
            sCard.style.border = '2px solid green';
         }

         comparisons.push(`[${firstPlayerSpan.textContent} vs ${secondPlayerSpan.textContent}]`);
         divHistory.textContent += /* comparisons.join(' '); */`[${firstPlayerSpan.textContent} vs ${secondPlayerSpan.textContent}] `;

         cardOne = false;
         firstPlayerSpan.textContent = '';
         cardTwo = false;
         secondPlayerSpan.textContent = '';
      }

   }
}