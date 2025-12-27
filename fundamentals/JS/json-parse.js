// JSON.parse basics

const obj = JSON.parse('{"a":1}');
console.log('Parsed object:', obj);

const arr = JSON.parse('[1,2,3]');
console.log('Parsed array:', arr);

export { obj, arr };