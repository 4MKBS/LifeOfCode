// Timers, debounce, and throttle

// setTimeout / clearTimeout
const timeoutId = setTimeout(() => {
    console.log('runs once after delay');
}, 500);
clearTimeout(timeoutId); // cancel if needed

// setInterval / clearInterval
const intervalId = setInterval(() => {
    console.log('repeats');
}, 1000);
clearInterval(intervalId);

// Debounce: wait for quiet period before running
function debounce(fn, delay = 200) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

// Throttle: run at most once per window
function throttle(fn, windowMs = 200) {
    let last = 0;
    let timer;
    return (...args) => {
        const now = Date.now();
        const remaining = windowMs - (now - last);
        if (remaining <= 0) {
            last = now;
            fn(...args);
        } else if (!timer) {
            timer = setTimeout(() => {
                last = Date.now();
                timer = null;
                fn(...args);
            }, remaining);
        }
    };
}
