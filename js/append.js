 //* 1. Where to add
// const placesList = document.getElementById('places-list');

 //* 2. What to be added
// const li = document.createElement('li');
// li.innerText = "Pahartoli Bon";

 //* 3. add the child
// placesList.appendChild(li);

//* 1. Where to add
const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biryani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Salad';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

//* Set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress Section</h1>
<ul>
    <li>T-shirt</li>
    <li>Shirt</li>
    <li>Pants</li>
</ul>
`
mainContainer.appendChild(sectionDress);