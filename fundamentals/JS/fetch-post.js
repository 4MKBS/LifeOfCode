// POST with fetch

const postData = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(postData),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Created Post ID:', data.id);
    console.log('Post Title:', data.title);
    console.log('Post Body:', data.body);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

// Async/Await version
async function createPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(postData),
      });
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    console.log('Created Post ID:', data.id);
    console.log('Post Title:', data.title);
    console.log('Post Body:', data.body);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

createPost();

