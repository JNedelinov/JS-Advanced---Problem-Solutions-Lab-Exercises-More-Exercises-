function deleteByEmail() {
    let input = document.querySelector("input[type=text][name=email]")
    let tableDataEmails = Array.from(document.querySelectorAll("#customers tbody td"));
    let div = document.querySelector("#result");

    tableDataEmails = tableDataEmails.filter((x, index) => index % 2 !== 0);
    let emails = tableDataEmails.slice(0).map(x => x = x.textContent);

    if (emails.includes(input.value)) {
        div.textContent = 'Deleted';
        let index = emails.indexOf(input.value);
        let parent = tableDataEmails[index].parentNode;
        input.value = '';
        return parent.remove();
    } else {
        return div.textContent = 'Not found.';
    }

}