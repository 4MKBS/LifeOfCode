// Performance entries

performance.mark('start');
setTimeout(() => {
    performance.mark('end');
    performance.measure('timer', 'start', 'end');
    console.log(performance.getEntriesByName('timer'));
}, 10);

performance.now();
console.log(`Current time: ${performance.now()} ms`);
