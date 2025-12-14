// Clipboard write example

navigator.clipboard.writeText('Hello, Clipboard!').then(() => {
    console.log('Text copied to clipboard successfully!');
}).catch(err => {
    console.error('Failed to write to clipboard: ', err);
});


