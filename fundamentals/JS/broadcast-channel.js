// BroadcastChannel API basics

// const channel = new BroadcastChannel('notifications');
// channel.postMessage({ text: 'hello' });
// channel.onmessage = e => console.log(e.data);
// Listening to messages from other tabs/windows
channel.addEventListener('message', (event) => {
    console.log('Received:', event.data);
});

// Sending messages to all other tabs/windows
function broadcastMessage(message) {
    channel.postMessage(message);
}

// Close the channel when done
channel.close();

// Example usage
broadcastMessage({ type: 'notification', content: 'Hello from another tab!' });

// Error handling
channel.addEventListener('messageerror', (event) => {
    console.error('Message error:', event);
});