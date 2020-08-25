function solve() {
  let paragraphInput = document.querySelector("body div#exercise p#input");

  let workingArr = paragraphInput.innerText.split('. ');

  let divOutput = document.querySelector("body div#exercise div#output");

  if (workingArr.length >= 1 && workingArr.length <= 3) {
    let paragraphOutput = document.createElement("p");
    workingArr.forEach(paragraph => {
      if (paragraph.length > 1) {
        paragraphOutput.innerText += paragraph[paragraph.length - 1] !== '.' ? `${paragraph}. ` : paragraph;
      }
    });
    divOutput.appendChild(paragraphOutput);
  } else if (workingArr.length > 3) {
    let count = 0;

    let paragraphOutput = document.createElement("p");

    for (let paragraph of workingArr) {
      if (paragraph.length >= 1) {
        if (count < 3) {
          count++;
          paragraphOutput.innerText += paragraph[paragraph.length - 1] !== '.' ? `${paragraph}. ` : paragraph;
        } else {
          divOutput.appendChild(paragraphOutput);
          count = 1;
          paragraphOutput = document.createElement("p");
          paragraphOutput.innerText += paragraph[paragraph.length - 1] !== '.' ? `${paragraph}. ` : paragraph;
        }
      }

    }
    divOutput.appendChild(paragraphOutput);
  }

}