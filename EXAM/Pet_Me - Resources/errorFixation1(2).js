//Zero Test - Add New Pet
document.body.innerHTML = `<h1>Pet Me!</h1>
    <p>Want to adopt a pet or need to rehome a dog or cat?</p>
    <p>Here we can help!</p>
    <form id="add">
        <h2>Add New Pet</h2>
        <div id='container'>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Age" />
            <input type="text" placeholder="Kind" />
            <input type="text" placeholder="Current Owner" />
            <button>Add</button>
        </div>
    </form>
    <section id="adoption">
        <h2>Find a new friend from here:</h2>
        <ul></ul>
    </section>
    <section id="adopted">
        <h2>Buddies with a new home:</h2>
        <ul></ul> 
    </section>
    <script>document.onload = solve();</script>`;


result();

const form = document.getElementById('container');
        let [name, age, kind, owner, addBtn] = Array.from(form.children);

        name.value = 'Tom';
        age.value = '0.3';
        kind.value = 'cat';
        owner.value = 'Jim King';

        addBtn.click();
        let newLiItem = Array.from(document.querySelector("#adoption > ul").children)[0];
        let insideLiElements = Array.from(newLiItem.children); // [p, span, btn]
        let [p, span, btn] = insideLiElements; 
        let [strongName, strongAge, strongKind] = Array.from(p.children); // [apn, span, span]
        

// Add new Pet, check structure;
        expect(insideLiElements.length).to.be.equal(3,'New list item has invalid structure'); 

        expect(p.tagName).to.be.equal("P", 'Pet main information should be P');
        expect(span.tagName).to.be.equal("SPAN", 'Pet owner element should be SPAN');
        expect(btn.tagName).to.be.equal("BUTTON", 'Add element - button');
        expect(strongName.tagName).to.be.equal("STRONG", 'Pet name element should be STRONG');
        expect(strongAge.tagName).to.be.equal("STRONG", 'Pet age element should be STRONG'); 
        expect(strongKind.tagName).to.be.equal("STRONG", 'Pet kind element should be STRONG'); 

        expect(strongName.textContent).to.be.equal("Tom", 'Pet name should be Tom');
        expect(strongAge.textContent).to.be.equal("0.3", 'Pet age should be Main'); 
        expect(strongKind.textContent).to.be.equal("cat", 'Pet kind should be 12.00');  
        expect(p.textContent).to.be.equal("Tom is a 0.3 year old cat", 'P element must contains - Tom is a 0.3 year old cat'); 
        expect(btn.textContent).to.be.equal("Contact with owner", 'Button text content must be - Contact with owner');  
        expect(span.textContent).to.be.equal("Owner: Jim King", 'Span must contains - Owner: Jim King');

        

        
