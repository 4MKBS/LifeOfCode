// Standalone debounce and throttle helpers

export function debounce(fn, delay = 200) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

export function throttle(fn, windowMs = 200) {
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
