// Geolocation API basics
const geoButton = document.getElementById('geo-button');

geoButton.addEventListener('click', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
            },
            (error) => {
                console.error(`Error getting location: ${error.message}`);
            }
        );
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
});

// Watching position changes
let watchId;
const watchButton = document.getElementById('watch-button');
const clearWatchButton = document.getElementById('clear-watch-button');

watchButton.addEventListener('click', () => {
    if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(
            (position) => {
                console.log(`Updated Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
            },
            (error) => {
                console.error(`Error watching location: ${error.message}`);
            }
        );
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
});

clearWatchButton.addEventListener('click', () => {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        console.log('Stopped watching position.');
    }
});

