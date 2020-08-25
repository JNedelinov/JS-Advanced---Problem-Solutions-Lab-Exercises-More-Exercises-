function getArticleGenerator(arr) {
    const initialArr = arr.slice(0);
    const divContent = document.getElementById("content");

    return sum;

    function sum() {
        let firstElement = initialArr.shift();
        if (firstElement !== undefined) {
            let newArticle = document.createElement("article");
            newArticle.textContent += firstElement;
            divContent.appendChild(newArticle);
            return initialArr;
        }
    }
}