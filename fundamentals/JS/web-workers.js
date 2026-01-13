// Web Worker basics

// main thread
const worker = new Worker('worker.js');

worker.postMessage('Hello, worker!');

worker.onmessage = function(event) {
    console.log('Message from worker:', event.data);
};

// worker.js
self.onmessage = function(event) {
    console.log('Message from main thread:', event.data);
    self.postMessage('Hello, main thread!');
};

// Terminate the worker after some time
setTimeout(() => {
    worker.terminate();
    console.log('Worker terminated');
}, 5000);

