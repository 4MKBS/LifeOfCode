// DOM basics: selecting and updating elements

// Querying
const title = document.querySelector('h1');
const items = document.querySelectorAll('.item');

// Creating and inserting
const note = document.createElement('div');
note.textContent = 'Hello DOM';
if (title) {
    title.insertAdjacentElement('afterend', note);
}

// Classes and attributes
if (note) {
    note.classList.add('highlight');
    note.setAttribute('role', 'status');
}

// Event delegation example
const list = document.querySelector('#list');
if (list) {
    list.addEventListener('click', e => {
        if (e.target.matches('li')) {
            e.target.classList.toggle('active');
        }
    });
}


// Updating styles
if (title) {
    title.style.color = 'blue';
    title.style.fontSize = '24px';
}

// Removing elements
if (items.length > 0) {
    items[0].remove();
}

// Logging to verify
console.log('Title:', title);
console.log('Items:', items);
console.log('Note element:', note);
