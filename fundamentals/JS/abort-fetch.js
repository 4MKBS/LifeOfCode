// AbortController with fetch

const controller = new AbortController();
const { signal } = controller;

fetch('/slow-endpoint', { signal })
    .then(res => res.json())
    .then(console.log)
    .catch(err => {
        if (err.name === 'AbortError') {
            console.log('Request aborted');
        }
    });

// Cancel the request if it takes too long
setTimeout(() => controller.abort(), 2000);
