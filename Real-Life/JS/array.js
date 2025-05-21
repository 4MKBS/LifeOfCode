// JavaScript Arrays Tutorial

// 1. Creating Arrays
const emptyArray = [];
const numbersArray = [1, 2, 3, 4, 5];
const mixedArray = [1, 'two', true, null, { name: 'object' }, [1, 2]];
const arrayFromConstructor = new Array(3); // Creates array with 3 empty slots
const arrayWithValues = new Array(1, 2, 3); // Creates [1, 2, 3]

// 2. Accessing Elements
const firstElement = numbersArray[0]; // 1
const lastElement = numbersArray[numbersArray.length - 1]; // 5

// 3. Basic Array Properties
console.log('Array length:', numbersArray.length);

// 4. Modifying Arrays
const fruits = ['apple', 'banana', 'cherry'];
fruits[1] = 'blueberry'; // Replace element
fruits.push('dragonfruit'); // Add to end
fruits.unshift('apricot'); // Add to beginning
const lastFruit = fruits.pop(); // Remove from end
const firstFruit = fruits.shift(); // Remove from beginning
console.log(fruits); // ['apple', 'blueberry', 'cherry']

// 5. Array Methods
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// filter - keep elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]

// reduce - accumulate values
const sum = numbers.reduce((total, num) => total + num, 0); // 15

// forEach - execute function for each element
numbers.forEach(num => console.log(num));

// find - get first element that passes test
const firstEven = numbers.find(num => num % 2 === 0); // 2

// some/every - test if some/all elements pass test
const hasEven = numbers.some(num => num % 2 === 0); // true
const allEven = numbers.every(num => num % 2 === 0); // false

// 6. Sorting and Reversing
const letters = ['c', 'a', 'b'];
letters.sort(); // ['a', 'b', 'c']
letters.reverse(); // ['c', 'b', 'a']

numbers.sort((a, b) => a - b); // Numeric sort: [1, 2, 3, 4, 5]

// 7. Finding Elements
const index = fruits.indexOf('cherry'); // 2
const includes = fruits.includes('apple'); // true

// 8. Slicing and Splicing
const sliced = numbers.slice(1, 3); // [2, 3] (non-destructive)
const spliced = [...numbers]; // Make copy to avoid modifying original
spliced.splice(1, 2, 'two', 'three'); // Remove 2 elements at index 1, insert new elements

// 9. Array Concatenation
const array1 = [1, 2];
const array2 = [3, 4];
const combined = array1.concat(array2); // [1, 2, 3, 4]
const combinedSpread = [...array1, ...array2]; // [1, 2, 3, 4] using spread

// 10. Multi-dimensional Arrays
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const middleValue = matrix[1][1]; // 5

// 11. Array Destructuring
const [first, second, ...rest] = numbersArray;
console.log(first, second, rest); // 1, 2, [3, 4, 5]

// 12. Array from Iterables
const arrayFromString = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
const arrayWithMap = Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]

// 13. New Array Methods
// flat - flattens nested arrays
const nestedArray = [1, [2, [3, 4]]];
const flattened = nestedArray.flat(2); // [1, 2, 3, 4]

// flatMap - map then flatten
const sentences = ['hello world', 'goodbye moon'];
const words = sentences.flatMap(sentence => sentence.split(' ')); // ['hello', 'world', 'goodbye', 'moon']

// 14. Array.of
const ofArray = Array.of(5); // [5] (different from new Array(5))

// 15. Checking if something is an Array
console.log(Array.isArray(numbers)); // true
console.log(Array.isArray('not array')); // false