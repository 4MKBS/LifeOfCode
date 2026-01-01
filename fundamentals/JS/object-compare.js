// Shallow compare objects

function shallowEqual(a, b) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every(k => a[k] === b[k]);
}
