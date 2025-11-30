/*
 * Titile: fetch.js
 * Description: write description here
 * Author: Muhammad Khairul Bashar Sakib ( MKBS )
 * Date: 30/11/2025 17:10:58
 */

// Fetch API Example
fetch('https://jsonplaceholder.typicode.com/posts/1')
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


// Async/Await Example
async function fetchPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
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

fetchPost();