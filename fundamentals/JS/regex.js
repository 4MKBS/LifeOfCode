// Regular expressions basics

const text = 'color or colour? 123-456';

// Test pattern
const hasU = /colou?r/.test(text); // true

// Match digits
const digits = text.match(/\d+/g); // ['123', '456']

// Replace with capture groups
const swapped = 'Doe, John'.replace(/(\w+), (\w+)/, '$2 $1');

// Flags: i (ignore case), g (global), m (multiline)
const words = 'One one ONE'.match(/one/gi); // ['One','one','ONE']

// Using RegExp constructor for dynamic patterns
const term = 'abc';
const dynamic = new RegExp(term, 'i');
dynamic.test('AbC');

console.log({ hasU, digits, swapped, words, dynamicTest: dynamic.test('AbC') });


// Advanced regex features

// Lookahead and lookbehind
const lookahead = 'foo1 foo2 foo3'.match(/foo(?=\d)/g); // ['foo', 'foo', 'foo']
const lookbehind = '1foo 2foo 3foo'.match(/(?<=\d)foo/g); // ['foo', 'foo', 'foo']

// Named capture groups
const namedGroups = /(?<area>\d{3})-(?<number>\d{3}-\d{4})/.exec('123-456-7890');
const areaCode = namedGroups.groups.area; // '123'
const numberPart = namedGroups.groups.number; // '456-7890'

// Sticky and Unicode flags
const stickyMatch = 'abcabc'.match(/abc/y); // ['abc']
const unicodeMatch = '𝟘𝟙𝟚'.match(/\p{Number}/gu); // ['𝟘', '𝟙', '𝟚']

console.log({ lookahead, lookbehind, areaCode, numberPart, stickyMatch, unicodeMatch });

// Regex methods: test, exec, matchAll
const regex = /(\w+)-(\d+)/g;
const str = 'item-1 item-2 item-3';

// Using exec in a loop
let match;
while ((match = regex.exec(str)) !== null) {
    console.log(`Found ${match[0]} with groups: ${match[1]}, ${match[2]}`);
}

// Using matchAll
const allMatches = [...str.matchAll(/(\w+)-(\d+)/g)];
allMatches.forEach(m => {
    console.log(`Match: ${m[0]}, Group1: ${m[1]}, Group2: ${m[2]}`);
});
console.log('All matches using matchAll:', allMatches);
