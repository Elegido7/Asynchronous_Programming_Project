//Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API.
//Use await to wait for the API response and then log the data.

// Function that returns a promise resolved after 4 seconds
function fetchApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('The day of great liberation is Here!');
    }, 4000);
  });
}

// Fetch API data and process it
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error with fetching data:', error);
  });

// Asynchronous function to await the API call
async function awaitApi() {
  try {
    const data = await fetchApi(); // Wait for fetchApi() to resolve
    console.log(data); // Log the resolved value
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Calling the function
awaitApi();
