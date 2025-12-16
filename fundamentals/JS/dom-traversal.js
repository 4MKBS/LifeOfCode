// DOM traversal helpers


// Get parent element
function getParent(element) {
    return element.parentElement;
}

// Get children elements
function getChildren(element) {
    return element.children;
}

// Get next sibling element
function getNextSibling(element) {
    return element.nextElementSibling;
}

// Get previous sibling element
function getPreviousSibling(element) {
    return element.previousElementSibling;
}

// Example usage
const listItem = document.querySelector('.item');

if (listItem) {
    console.log('Parent:', getParent(listItem));
    console.log('Children:', getChildren(getParent(listItem)));
    console.log('Next Sibling:', getNextSibling(listItem));
    console.log('Previous Sibling:', getPreviousSibling(listItem));
}


// Traversing up to find a specific ancestor
function findAncestor(element, selector) {
    let current = element;
    while (current && !current.matches(selector)) {
        current = current.parentElement;
    }
    return current;
}

// Example usage
if (listItem) {
    const ancestor = findAncestor(listItem, '#list-container');
    console.log('Found Ancestor:', ancestor);
}

// Traversing down to find all matching descendants
function findDescendants(element, selector) {
    return element.querySelectorAll(selector);
}

// Example usage
if (listItem) {
    const descendants = findDescendants(getParent(listItem), '.item');
    console.log('Found Descendants:', descendants);
}
// Logging to verify
console.log('List Item:', listItem);
console.log('Traversal complete.');
