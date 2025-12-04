// Promises and async/await

// Creating a promise
function fakeFetch(value, delay = 300) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            value === 'error' ? reject(new Error('Oops')) : resolve(`Result: ${value}`);
        }, delay);
    });
}

// Chaining
fakeFetch('A')
    .then(res => `${res} -> next`)
    .then(console.log)
    .catch(console.error);

// Async/await with try/catch
async function loadData() {
    try {
        const a = await fakeFetch('B');
        const b = await fakeFetch('C');
        return [a, b];
    } catch (err) {
        console.error('Handled error', err.message);
        return [];
    }
}

// Running async function
loadData().then(console.log);

// Promise combinators
async function runTogether() {
    const results = await Promise.all([
        fakeFetch('X', 200),
        fakeFetch('Y', 400)
    ]);
    console.log('All done', results);
}

Promise.race([
    fakeFetch('fast', 100),
    fakeFetch('slow', 500)
]).then(win => console.log('Race winner', win));

runTogether();
