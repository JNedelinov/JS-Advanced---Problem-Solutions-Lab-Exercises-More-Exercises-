function solve() {
    const form = document.getElementById('add');

    const divForm = form.querySelector('#container');

    const inputs = divForm.querySelectorAll('input');

    const name = inputs[0];
    const age = inputs[1];
    const kind = inputs[2];
    const currOwner = inputs[3];

    const button = divForm.querySelector('button');
    button.setAttribute('type', 'submit');
    button.addEventListener('click', addPet);

    form.onsubmit = (e) => {
        e.preventDefault();
    }

    const sections = document.querySelectorAll('section');

    const adoption = sections[0];
    const adopted = sections[1];

    const ulInAdoption = adoption.querySelector('ul');
    const ulInAdopted = adopted.querySelector('ul');

    function checked(e) {
        const li = e.target.parentElement;
        ulInAdopted.removeChild(li);
    }

    function adoptingThePet(e) {
        const div = e.target.parentElement;
        
        const li = div.parentElement;

        const input = div.querySelector('input');

        const span = li.querySelector('span');


        const newButton = document.createElement('button');
        newButton.textContent = 'Checked';
        newButton.addEventListener('click', checked);

        if (input.value !== '') {
            li.removeChild(div);
            li.appendChild(newButton);
            ulInAdoption.removeChild(li);
            ulInAdopted.appendChild(li);
            span.textContent = `New Owner: ${input.value}`;
        }

    }

    function adopter(e) {
        const li = e.target.parentElement;

        const currButton = li.querySelector('button');


        const newDiv = document.createElement('div');

        const newInput = document.createElement('input');
        newInput.placeholder = 'Enter your names';

        const newButton = document.createElement('button');
        newButton.textContent = 'Yes! I take it!';
        newButton.addEventListener('click', adoptingThePet);

        newDiv.appendChild(newInput);
        newDiv.appendChild(newButton);

        li.removeChild(currButton);
        li.appendChild(newDiv);
    }

    function addPet(e) {
        const li = document.createElement('li');

        const p = document.createElement('p');

        p.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`

        const span = document.createElement('span');
        span.textContent = `Owner: ${currOwner.value}`;

        const button = document.createElement('button');
        button.textContent = 'Contact with owner';
        button.addEventListener('click', adopter);

        if (name.value !== '' && parseFloat(age.value) > 0 && kind.value !== '' && currOwner.value !== '') {
            li.appendChild(p);
            li.appendChild(span);
            li.appendChild(button);

            ulInAdoption.appendChild(li);

            name.value = '';
            age.value = '';
            kind.value = '';
            currOwner.value = '';
        }
    }
}