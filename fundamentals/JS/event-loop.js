// Event loop tick order

console.log('Start of script');

setTimeout(() => {
    console.log('Timeout callback');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise then callback');
});

queueMicrotask(() => {
    console.log('Microtask callback');
});

console.log('End of script');


