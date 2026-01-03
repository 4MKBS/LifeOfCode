// performance.now and marks

const start = performance.now();
setTimeout(() => {
    const duration = performance.now() - start;
    console.log(`elapsed ${duration.toFixed(2)}ms`);
}, 50);
