// Event loop: tasks vs microtasks

console.log('start');

setTimeout(() => console.log('macro task (timeout)'), 0);

Promise.resolve().then(() => console.log('microtask (promise then)'));

queueMicrotask(() => console.log('microtask (queueMicrotask)'));

console.log('end');
