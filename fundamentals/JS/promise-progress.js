// Simulating promise progress via events/callbacks

function withProgress(steps, onProgress) {
    return steps.reduce((p, step, i) => p.then(() => {
        onProgress((i + 1) / steps.length);
        return step();
    }), Promise.resolve());
}
