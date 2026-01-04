// Promise with timeout helper

function withTimeout(promise, ms) {
    return Promise.race([
        promise,
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms))
    ]);
}

withTimeout(new Promise(resolve => setTimeout(() => resolve('ok'), 100)), 200)
    .then(console.log)
    .catch(console.error);
