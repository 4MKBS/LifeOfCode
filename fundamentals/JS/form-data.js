// FormData basics

// Creating a FormData object
const formElement = document.querySelector('form');
const formData = new FormData(formElement);

// Appending data to FormData
formData.append('username', 'john_doe');
formData.append('profile_picture', fileInput.files[0]); // Assuming fileInput is an <input type="file">

// Retrieving data from FormData
console.log(formData.get('username')); // Outputs: john_doe

// Iterating over FormData entries
for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
}

// Sending FormData via fetch
fetch('/submit', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));


