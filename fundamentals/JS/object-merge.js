// Shallow merge helper

function merge(...objs) {
    return objs.reduce((acc, obj) => Object.assign(acc, obj), {});
}
