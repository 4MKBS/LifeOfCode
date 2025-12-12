// Custom error hierarchy

class AppError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AppError';
    }
}

class NotFoundError extends AppError {
    constructor(resource) {
        super(`${resource} not found`);
        this.name = 'NotFoundError';
    }
}

try {
    throw new NotFoundError('User');
} catch (err) {
    console.error(err.name, err.message);
}
