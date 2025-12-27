// JSON.parse with reviver

const raw = '{"date":"2025-01-01T00:00:00Z"}';
const parsed = JSON.parse(raw, (key, value) => {
    if (key === 'date') return new Date(value);
    return value;
});

console.log('Parsed date object:', parsed.date);
console.log('Is instance of Date:', parsed.date instanceof Date);   
export { parsed };