// DOM event basics

// Event listener example
const button = document.getElementById('my-button');

if (button) {
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
}

// Event delegation example
const list = document.getElementById('my-list');

if (list) {
    list.addEventListener('click', (event) => {
        if (event.target && event.target.nodeName === 'LI') {
            console.log('List item clicked:', event.target.textContent);
        }
    });
}

// Custom event example
const customEvent = new Event('customEvent');

document.addEventListener('customEvent', () => {
    console.log('Custom event triggered!');
});

// Dispatch the custom event
document.dispatchEvent(customEvent);

// Removing event listener example
function handleMouseOver() {
    console.log('Mouse over event');
}

if (button) {
    button.addEventListener('mouseover', handleMouseOver);
    
    // Remove the event listener after 5 seconds    
    setTimeout(() => {
        button.removeEventListener('mouseover', handleMouseOver);
        console.log('Mouse over event listener removed');
    }, 5000);
}

