// Promise.finally example

Promise.resolve('done')
    .then(v => v.toUpperCase())
    .finally(() => console.log('cleanup'))
    .then(console.log);
