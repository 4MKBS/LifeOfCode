// Promise patterns: all, allSettled, any

const succeed = val => Promise.resolve(val);
const fail = msg => Promise.reject(new Error(msg));

Promise.all([succeed('a'), succeed('b')])
    .then(values => console.log('all', values))
    .catch(err => console.error('all error', err.message));

Promise.allSettled([succeed('x'), fail('nope')])
    .then(results => console.log('allSettled', results));

Promise.any([fail('first'), succeed('winner'), succeed('another')])
    .then(val => console.log('any', val))
    .catch(err => console.error('any error', err.errors));
