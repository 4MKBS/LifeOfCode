// Iterables, iterators, and generators

// Custom iterable object
const range = {
    start: 1,
    end: 3,
    [Symbol.iterator]() {
        let current = this.start;
        return {
            next: () => ({
                value: current,
                done: current++ > this.end
            })
        };
    }
};

for (const n of range) {
    console.log('range item', n);
}

// Generator function simplifies iterator creation
function* countdown(from) {
    while (from > 0) {
        yield from--;
    }
}

console.log([...countdown(3)]); // [3, 2, 1]

// Generator for lazy sequences
function* idFactory() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const ids = idFactory();
ids.next().value; // 1
ids.next().value; // 2
