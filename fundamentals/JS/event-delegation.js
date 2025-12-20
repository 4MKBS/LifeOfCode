// Event delegation example

const list = document.querySelector('ul');
list.addEventListener('click', e => {
    if (e.target.matches('li')) {
        console.log('Clicked item', e.target.textContent);
    }
});


// Adding new items dynamically
const newItem = document.createElement('li');
newItem.textContent = 'Item 4';
list.appendChild(newItem);
// Clicking on the new item will also be handled by the event delegation
// because the event listener is on the parent <ul> element.


