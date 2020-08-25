function solve() {
    const taskInput = document.getElementById("task");
    const descriptionInput = document.getElementById("description");
    const dateInput = document.getElementById("date");

    const sections = document.querySelectorAll("section");

    const openSection = sections[1];
    const inProgressSection = sections[2];
    const completeSection = sections[3];

    const secondDivInSectionOPS = openSection.querySelectorAll("div")[1];
    const secondDivInSectionIPS = inProgressSection.querySelectorAll("div")[1];
    const secondDivInSectionCS = completeSection.querySelectorAll("div")[1];

    const addBtn = document.getElementById("add");
    document.querySelector("#add").setAttribute("type", "submit");

    const form = document.querySelector("form");
    form.onsubmit = (e) => {
        e.preventDefault();
    }

    addBtn.addEventListener("click", addTask);

    function addTask(e) {
        let newArticle = document.createElement("article");

        let h3 = document.createElement("h3");
        h3.textContent = taskInput.value;

        let fisrtP = document.createElement("p");
        fisrtP.textContent = `Description: ${descriptionInput.value}`

        let secondP = document.createElement("p");
        secondP.textContent = `Due Date: ${dateInput.value}`;

        let div = document.createElement("div");
        div.classList.add('flex');

        let fBtn = document.createElement("button");
        let sBtn = document.createElement("button");

        fBtn.classList.add("green");
        sBtn.classList.add("red");

        fBtn.textContent = 'Start';
        sBtn.textContent = 'Delete';

        div.appendChild(fBtn);
        div.appendChild(sBtn);

        newArticle.appendChild(h3);
        newArticle.appendChild(fisrtP);
        newArticle.appendChild(secondP);
        newArticle.appendChild(div);

        if (taskInput.value !== '' && descriptionInput.value !== '' && dateInput.value !== '') {
            secondDivInSectionOPS.appendChild(newArticle);

            taskInput.value = '';
            descriptionInput.value = '';
            dateInput.value = '';

            const greenBtns = document.querySelectorAll(".green");
            const redBtns = document.querySelectorAll(".red");

            Array.from(greenBtns).forEach(btn => btn.addEventListener("click", startTask));
            Array.from(redBtns).forEach(btn => btn.addEventListener("click", endTask));
        }
    }

    function startTask(e) {
        const article = e.target.parentNode.parentNode;
        secondDivInSectionOPS.removeChild(article);

        const div = e.target.parentNode;
        const fBtn = div.querySelectorAll("button")[0];
        const sBtn = div.querySelectorAll("button")[1];

        fBtn.textContent = 'Delete';
        sBtn.textContent = 'Finish';

        fBtn.classList.remove("green");
        sBtn.classList.remove("red");

        fBtn.classList.add("red");
        sBtn.classList.add("orange");

        secondDivInSectionIPS.appendChild(article);

        const deleteBtn = document.querySelectorAll(".red");
        const finishBtn = document.querySelectorAll(".orange");

        Array.from(finishBtn).forEach(btn => btn.addEventListener("click", finishTask));
        Array.from(deleteBtn).forEach(btn => btn.addEventListener('click', endTask))
    }

    function endTask(e) {
        const article = e.target.parentNode.parentNode;
        if (article.parentElement !== document.getElementById("in-progress")) {
        secondDivInSectionOPS.removeChild(article);
        } else {
            secondDivInSectionIPS.removeChild(article);
        }
    }

    function finishTask(e) {
        const article = e.target.parentElement.parentElement;
        
        const divFlex = article.querySelector(".flex");

        article.removeChild(divFlex);

        secondDivInSectionCS.appendChild(article);
    }
}