function createArticle() {
	// get the info from the input with id createTitle
	const titleArticleInput = document.getElementById("createTitle");

	// get the info from the textarea with id createContent
	const contentArticleInput = document.getElementById("createContent");

	const sectionForArticle = document.getElementById("articles");

	const valueOfArticle = titleArticleInput.value;
	const valueOfContent = contentArticleInput.value;

	const article = document.createElement("article");

	const articleHeading = document.createElement("h3");
	const articleParagraph = document.createElement("p");


	if (valueOfArticle !== '' && valueOfContent !== '') {
		articleHeading.textContent = valueOfArticle;
		articleParagraph.textContent = valueOfContent;

		article.appendChild(articleHeading);
		article.appendChild(articleParagraph);
		sectionForArticle.appendChild(article);

		titleArticleInput.value = '';
		contentArticleInput.value = '';
	}
}