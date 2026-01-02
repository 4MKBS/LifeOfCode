// Optional chaining with nullish coalescing examples

const settings = {
    theme: {
        color: 'teal'
    }
};

const chosen = settings?.theme?.color ?? 'default';
const maybeFnResult = settings?.callback?.();
