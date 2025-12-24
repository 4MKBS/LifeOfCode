// HTTP method verbs

const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

methods.forEach((method) => {
  console.log(`HTTP Method: ${method}`);
});

const responseMessages = fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "GET",
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  })
  .then((data) => {
    console.log("Data fetched with GET:", data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

// Example of a POST request
const postData = {
  title: "foo",
  body: "bar",
  userId: 1,
};

async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(postData),
  });

  const data = await response.json();
  console.log("Data created with POST:", data);
}

createPost();

// Example of a DELETE request
async function deletePost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });

  if (response.ok) {
    console.log("Post deleted successfully");
  } else {
    console.log("Failed to delete post");
  }
}

deletePost();

// example of a PUT request
async function updatePost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      id: 1,
      title: "updated title",
      body: "updated body",
      userId: 1,
    }),
  });

  const data = await response.json();
  console.log("Data updated with PUT:", data);
}

updatePost();

// example of a PATCH request
async function patchPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: "patched title",
    }),
  });

  const data = await response.json();
  console.log("Data patched with PATCH:", data);
}

patchPost();
