// URL and URLSearchParams

const url = new URL('https://example.com/path?x=1');
url.searchParams.set('y', '2');
url.toString();

console.log(url.toString()); // "https://example.com/path?x=1&y=2"

const params = new URLSearchParams('a=3&b=4');
params.append('c', '5');

console.log(params.toString()); // "a=3&b=4&c=5"

const newUrl = new URL('https://example.com');
newUrl.search = params.toString();

console.log(newUrl.toString()); // "https://example.com/?a=3&b=4&c=5"
console.log(newUrl.searchParams.get('b')); // "4"
console.log(newUrl.searchParams.has('c')); // true
console.log(newUrl.searchParams.delete('a')); 
console.log(newUrl.toString()); // "https://example.com/?b=4&c=5"
for (const [key, value] of newUrl.searchParams) {
  console.log(`${key}: ${value}`);
}
// Output:
// b: 4
// c: 5