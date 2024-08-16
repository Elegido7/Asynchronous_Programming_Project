//Awaiting Parallel Calls:
//Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all().
//Log the responses once all requests are complete.

async function parallelCalls(urls) {
  try {
    // Create an array of fetch promises based on the URLs
    const fetchPromises = urls.map((url) =>
      fetch(url).then((response) => response.json())
    );

    // Use Promise.all to wait for all fetch promises to resolve
    const responses = await Promise.all(fetchPromises);

    // console Log the responses and error
    console.log('Responses:', responses);
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
  }
}

// Sample URL for use to fetch data
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/3',
];

parallelCalls(urls);
