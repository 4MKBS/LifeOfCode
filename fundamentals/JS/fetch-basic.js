// Basic fetch GET

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data));

// Basic fetch with async/await

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
  const data = await response.json();
  console.log(data);
}

fetchData();



