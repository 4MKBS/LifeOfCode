// Avoiding common memory leaks

// - Clean up timers and intervals
// - Remove event listeners on teardown
// - Avoid unbounded caches
// - Be cautious with closures holding references to large objects

// Example of cleaning up timers and event listeners
class Example {
  constructor() {
    this.intervalId = setInterval(() => {
      console.log("Interval running");
    }, 1000);

    this.handleClick = this.handleClick.bind(this);
    document.addEventListener("click", this.handleClick);
  }

  handleClick() {
    console.log("Document clicked");
  }

  teardown() {
    clearInterval(this.intervalId);
    document.removeEventListener("click", this.handleClick);
    console.log("Cleaned up resources");
  }
}

const example = new Example();

// Simulate teardown after 5 seconds
setTimeout(() => {
  example.teardown();
}, 5000);
// Example of avoiding unbounded cache
class Cache {
  constructor(limit = 100) {
    this.limit = limit;
    this.map = new Map();
  }

  set(key, value) {
    if (this.map.size >= this.limit) {
      // Remove the oldest entry
      const firstKey = this.map.keys().next().value;
      this.map.delete(firstKey);
    }
    this.map.set(key, value);
  }

  get(key) {
    return this.map.get(key);
  }
}

const cache = new Cache(3);
cache.set("a", 1);
cache.set("b", 2);
cache.set("c", 3);
console.log(cache.map); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
cache.set("d", 4);
console.log(cache.map); // Map(3) { 'b' => 2, 'c' => 3, 'd' => 4 }

// Example of closure holding reference to large object
function createLargeObject() {
  const largeObject = new Array(1000000).fill("data");
  return function () {
    console.log(largeObject.length);
  };
}

const getLargeObjectLength = createLargeObject();
getLargeObjectLength(); // 1000000

// To avoid memory leak, ensure the closure is not held longer than necessary
// by nullifying references when done
// getLargeObjectLength = null; // Uncommenting this line would help in garbage collection
