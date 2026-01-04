// Promise error handling patterns

// Local catch
Promise.reject(new Error('fail'))
    .then(() => console.log('won’t run'))
    .catch(err => console.error('caught', err.message));

// try/catch with async/await
(async () => {
    try {
        await Promise.reject(new Error('oops'));
    } catch (err) {
        console.error('async caught', err.message);
    }
})();
