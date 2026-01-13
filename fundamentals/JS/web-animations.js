// Web Animations API basics

const box = document.querySelector('.box');
box.animate([
    { transform: 'translateX(0)' },
    { transform: 'translateX(100px)' }
], {
    duration: 500,
    iterations: 2
});

// Keyframe effect with options
const keyframes = new KeyframeEffect(
    box,
    [
        { transform: 'scale(1)', background: 'red' },
        { transform: 'scale(1.5)', background: 'blue' },
        { transform: 'scale(1)', background: 'red' }
    ],
    { duration: 1000, iterations: Infinity }
);

const animation = new Animation(keyframes, document.timeline);
animation.play();

// Controlling playback
setTimeout(() => {
    animation.pause();
    console.log('Animation paused');
}, 3000);

setTimeout(() => {
    animation.play();
    console.log('Animation resumed');
}, 5000);

setTimeout(() => {
    animation.cancel();
    console.log('Animation canceled');
}, 8000);
