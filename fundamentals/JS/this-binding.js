// Understanding `this` and binding

const player = {
    name: 'Ada',
    score: 0,
    increment(points) {
        this.score += points;
        return `${this.name} now has ${this.score}`;
    }
};

const standAlone = player.increment;
// Without binding, `this` is undefined in strict mode; bind fixes it.
const boundIncrement = player.increment.bind(player);

player.increment(5); // works via implicit binding
boundIncrement(3); // uses bound `this`

// call/apply set `this` per call
standAlone.call({ name: 'Lin', score: 10 }, 2); // score -> 12
standAlone.apply({ name: 'Mia', score: 7 }, [5]); // score -> 12

// Arrow functions capture `this` lexically
const timerDemo = {
    count: 0,
    start() {
        setTimeout(() => {
            this.count += 1; // arrow keeps surrounding `this`
        }, 0);
    }
};
