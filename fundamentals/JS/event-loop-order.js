// Event loop ordering demo

console.log('sync 1');

queueMicrotask(() => console.log('microtask 1'));

setTimeout(() => console.log('timeout 1'), 0);

Promise.resolve().then(() => console.log('promise then'));

console.log('sync 2');

setTimeout(() => {
    queueMicrotask(() => console.log('microtask inside timeout'));
    console.log('timeout 2');
}, 0);

queueMicrotask(() => console.log('microtask 2'));

console.log('sync 3');

// Expected output order:
// sync 1
// sync 2
// sync 3
// microtask 1
// microtask 2
// promise then
// timeout 1
// timeout 2
// microtask inside timeout