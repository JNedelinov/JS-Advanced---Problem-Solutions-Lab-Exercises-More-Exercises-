function growingWord() {
  let paragraphToChange = document.querySelector("div#exercise p");
  /* console.log(paragraphToChange.innerText); */

  let px = 2;

  let changeColors = {
    "blue": "green",
    "green": "red",
    "red": "blue",
  }

  if (!paragraphToChange.hasAttribute("style")) {
    paragraphToChange.setAttribute("style", `color: blue;font-size: ${px}px`);
  } else {
    let currPx = paragraphToChange.style["font-size"]; 
    px = currPx.slice(0, currPx.length - 2) * 2;
    let currColor = paragraphToChange.style.color;
    paragraphToChange.setAttribute("style", `color: ${changeColors[currColor]}; font-size: ${px}px`);
  }

}