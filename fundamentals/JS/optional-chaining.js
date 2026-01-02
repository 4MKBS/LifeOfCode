// Optional chaining and nullish coalescing

const user = {
    profile: {
        contact: {
            email: 'user@example.com'
        }
    }
};

const email = user?.profile?.contact?.email; // safely access
const phone = user?.profile?.contact?.phone ?? 'no phone';

// Optional chaining with calls
const getTitle = user?.getTitle?.(); // undefined if method missing

// Distinguish ?? from ||
const count = 0;
const defaultCount = count ?? 10; // 0 (keeps falsy zero)
const orCount = count || 10; // 10
