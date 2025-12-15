// Public and private class fields

class Counter {
    #count = 0; // private field
    increment() {
        this.#count += 1;
        return this.#count;
    }
}

const c = new Counter();
c.increment();
