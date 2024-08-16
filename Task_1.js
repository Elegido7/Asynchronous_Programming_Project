//Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values
//and logs each value with a delay of 1 second between logs.

// Function to simulate delay using Promise
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async function to iterate over an array with delay
async function people(values) {
  for (let value of values) {
    console.log(value);
    await delay(1000); // Wait for 1 second (1000 ms)
  }
}

// Example usage:
const Colleagues = ['Dennis', 'Brian', 'Zelipha', 'Mohammed', 'Agnes'];

//call the function
people(Colleagues);
