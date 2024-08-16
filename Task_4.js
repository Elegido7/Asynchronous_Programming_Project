//Awaiting Concurrent Requests: Create an async function concurrentRequests
//that makes two API calls concurrently using Promise.all().
//Log the combined results after both requests have resolved.

const axios = require('axios');

async function concurrentRequests() {
  try {
    // API URL to use to get the data
    const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/1';
    const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts/';

    // Creating promises for both API requests using axios
    const request1 = axios.get(apiUrl1).then((response) => response.data);
    const request2 = axios.get(apiUrl2).then((response) => response.data);

    // Promise.all used to wait for both promises to resolve before resolving the results
    const [result1, result2] = await Promise.all([request1, request2]);

    // Combining the results to release at once when the process is complete
    const combinedResults = { result1, result2 };

    // Logging the combined results
    console.log('Combined Results:', combinedResults);
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
  }
}

// Call the function
concurrentRequests();
