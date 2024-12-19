const apiUrl = "https://interview-mock-api.onrender.com/api-docs/";

// Fetch JSON data
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    console.log(data); // Handle the JSON data here
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
