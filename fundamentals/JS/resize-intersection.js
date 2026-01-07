// ResizeObserver and IntersectionObserver basics

const resizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => console.log('Resized', entry.contentRect));
});
resizeObserver.observe(document.body);

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => console.log('Visible', entry.isIntersecting));
});
io.observe(document.querySelector('#target'));

// Example element to observe
const targetElement = document.createElement('div');
targetElement.id = 'target';
targetElement.style.width = '100px';
targetElement.style.height = '100px';
targetElement.style.background = 'red';
document.body.appendChild(targetElement);
targetElement.style.marginTop = '150vh'; // Push it out of view initially

// Scroll to make it intersect
setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight);
}, 1000);

