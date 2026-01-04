// Promise.all example

Promise.all([
    Promise.resolve(1),
    Promise.resolve(2)
]).then(values => console.log(values));

