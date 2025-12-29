// Map and Set basics

const map = new Map();
map.set('key', 1);
map.get('key');
map.has('key');
map.delete('key');

const set = new Set([1, 2, 2, 3]);
set.add(4);
set.has(2);
set.delete(3);

// Iterating over Map
for (const [key, value] of map) {
  console.log(key, value);
}

// Iterating over Set
for (const value of set) {
  console.log(value);
}

// Converting Map to Array
const mapArray = Array.from(map);

// Converting Set to Array
const setArray = Array.from(set);

// Size of Map and Set
const mapSize = map.size;
const setSize = set.size;

console.log('Map Size:', mapSize);
console.log('Set Size:', setSize);
console.log('Map as Array:', mapArray);
console.log('Set as Array:', setArray);

