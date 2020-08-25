/* playerSpan.textContent = e.target.name; */

      /* console.log(firstPlayerSpan); */

      if (Number(playerSpan.textContent) > Number(secondPlayerSpan.textContent)) {
         cardOne.style.border = "2px solid green";
         cardTwo.style.border = "2px solid red";
      } else {
         cardOne.style.border = "2px solid red";
         cardTwo.style.border = "2px solid green";
      }
      
      /* console.log(cardOne); */