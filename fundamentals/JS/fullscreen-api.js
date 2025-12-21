// Fullscreen API basics

const fsButton = document.getElementById('fs-button');

fsButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
});

// Listening for fullscreen change events
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        console.log('Entered fullscreen mode');
    } else {
        console.log('Exited fullscreen mode');
    }
});

// Listening for fullscreen error events
document.addEventListener('fullscreenerror', (event) => {
    console.error('Fullscreen error occurred:', event);
}); 

// Checking fullscreen support
if (document.fullscreenEnabled) {
    console.log('Fullscreen API is supported');
} else {
    console.log('Fullscreen API is not supported');
}

// Toggling fullscreen mode for a specific element
const specificElement = document.getElementById('specific-element');
const toggleFsButton = document.getElementById('toggle-fs-button');

toggleFsButton.addEventListener('click', () => {
    if (document.fullscreenElement === specificElement) {
        document.exitFullscreen();
    }
    else {
        specificElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
        });
    }
});

