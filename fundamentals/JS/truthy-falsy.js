// Truthy and falsy values

const values = [false, 0, '', null, undefined, NaN, 'hello', 42];
values.forEach(v => console.log(v, Boolean(v)));
