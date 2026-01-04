// Promise cancellation pattern using AbortController

const controller = new AbortController();
const { signal } = controller;

function fetchWithAbort(url, opts = {}) {
    return fetch(url, { ...opts, signal });
}

controller.abort(); // later to cancel the fetch request

fetchWithAbort('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
        if (err.name === 'AbortError') {
            console.log('Fetch aborted');
        } else {
            console.error('Fetch error:', err);
        }
    }); 

