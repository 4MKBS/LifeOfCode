// Fetch with basic error handling
fetch('https://jsonplaceholder.typicode.com/posts/3')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Post Title:', data.title);
        console.log('Post Body:', data.body);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
    
// Async/Await with error handling  
async function fetchPostWithErrorHandling() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/4');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Post Title:', data.title);
        console.log('Post Body:', data.body);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

fetchPostWithErrorHandling();



