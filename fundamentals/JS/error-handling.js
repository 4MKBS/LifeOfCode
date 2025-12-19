// Error handling patterns

// try/catch/finally
try {
    JSON.parse('{bad json}');
} catch (err) {
    console.error('Parse failed:', err.message);
} finally {
    console.log('Cleanup runs regardless');
}

// Custom error type
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

function mustBePositive(n) {
    if (n <= 0) throw new ValidationError('Number must be positive');
    return n;
}

// Async error handling
async function guardedCall() {
    try {
        await Promise.reject(new Error('Network down'));
    } catch (err) {
        console.error('Async caught:', err.message);
    }
}

guardedCall();

// Global error handling
window.addEventListener('error', event => {
    console.error('Global error caught:', event.message);
});

window.addEventListener('unhandledrejection', event => {
    console.error('Unhandled promise rejection:', event.reason);
});

// Trigger global error
setTimeout(() => {
    throw new Error('Simulated global error');
}, 1000);

// Trigger unhandled rejection
setTimeout(() => {
    Promise.reject(new Error('Simulated unhandled rejection'));
}, 1500);

// Usage of custom error
try {
    mustBePositive(-5);
} catch (err) {
    if (err instanceof ValidationError) {
        console.error('Validation error:', err.message);
    } else {
        console.error('Other error:', err.message);
    }
}   
