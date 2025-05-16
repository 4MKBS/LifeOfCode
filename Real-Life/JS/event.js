/**
 * JavaScript Events - Comprehensive Overview
 */

// Basic Event Handling
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
    
    // Adding event listeners
    const button = document.querySelector('#myButton');
    if (button) {
        button.addEventListener('click', handleClick);
    }
    
    // Event propagation demo setup
    setupEventPropagation();
    
    // Custom events demo setup
    setupCustomEvents();
});

// Event handler function
function handleClick(event) {
    console.log('Button clicked!');
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
    
    // Prevent default behavior if needed
    // event.preventDefault();
    
    // Stop propagation if needed
    // event.stopPropagation();
}

// Event propagation (bubbling and capturing)
function setupEventPropagation() {
    const parent = document.querySelector('.parent');
    const child = document.querySelector('.child');
    
    if (parent && child) {
        // Bubbling phase (default)
        parent.addEventListener('click', e => {
            console.log('Parent clicked (bubbling)');
        });
        
        // Capturing phase (third parameter true)
        parent.addEventListener('click', e => {
            console.log('Parent clicked (capturing)');
        }, true);
        
        child.addEventListener('click', e => {
            console.log('Child clicked');
        });
    }
}

// Custom events
function setupCustomEvents() {
    // Create a custom event
    const customEvent = new CustomEvent('userAction', {
        detail: {
            username: 'JohnDoe',
            action: 'login'
        },
        bubbles: true,
        cancelable: true
    });
    
    // Listen for custom event
    document.addEventListener('userAction', e => {
        console.log('Custom event detected:', e.detail);
    });
    
    // Dispatch custom event
    const triggerBtn = document.querySelector('#customEventTrigger');
    if (triggerBtn) {
        triggerBtn.addEventListener('click', () => {
            document.dispatchEvent(customEvent);
            console.log('Custom event dispatched');
        });
    }
}

// Event delegation pattern
function setupEventDelegation() {
    const list = document.querySelector('#itemList');
    if (list) {
        list.addEventListener('click', e => {
            // Check if clicked element is a list item
            if (e.target.tagName === 'LI') {
                console.log('List item clicked:', e.target.textContent);
            }
        });
    }
}