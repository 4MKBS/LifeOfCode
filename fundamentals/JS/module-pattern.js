// Module pattern without ESM (IIFE)

const CounterModule = (() => {
    let count = 0;
    return {
        increment() {
            count += 1;
            return count;
        }
    };
})();

CounterModule.increment();

console.log(CounterModule.increment()); // 2
console.log(CounterModule.increment()); // 3
console.log(CounterModule.increment()); // 4
console.log(CounterModule.increment()); // 5

