// Async iterators

async function* streamData() {
    yield 'first';
    yield 'second';
}

(async () => {
    for await (const item of streamData()) {
        console.log(item);
    }
})();
