function solve() {
  let anchors = Array.from(document.querySelectorAll(".middled .link-1 a"));
  anchors.forEach(a => {
    a.addEventListener("click", function(e) {
      let paragraph = a.parentElement.querySelector("p");
      let paragraphArr = paragraph.textContent.split(' ');
      paragraphArr[1]++;
      paragraph.innerText = paragraphArr.join(' ');
    });
  });
}