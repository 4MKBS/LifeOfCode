// Fetch streaming (ReadableStream)

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = '';

    function read() {
      return reader.read().then(({ done, value }) => {
        if (done) {
          console.log('Stream complete');
          console.log('Full Response:', result);
          return;
        }
        result += decoder.decode(value, { stream: true });
        console.log('Received chunk:', decoder.decode(value));
        return read();
      });
    }

    return read();
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

// Async/Await version
async function fetchStreamedData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        console.log('Stream complete');
        console.log('Full Response:', result);
        break;
      }
      result += decoder.decode(value, { stream: true });
      console.log('Received chunk:', decoder.decode(value));
    }
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

fetchStreamedData();




