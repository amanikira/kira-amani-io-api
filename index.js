document.getElementById('new-cat').addEventListener('click', getRandomCat);

function getRandomCat() {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';  // The Cat API endpoint
    const apiKey = 'live_1CsDvGUzGzKtOc8kjGA05kbzvAQ7uwobjnOEBs96hV6EcGDYvJY7ZW482vGy58Pq';  // Replace with your API key

    fetch(apiUrl, {
        headers: {
            'x-api-key': apiKey  // Send the API key in the headers
        }
    })
    .then(response => response.json())  // Parse the response to JSON
    .then(data => {
        const catImage = data[0].url;  // Get the URL of the cat image
        document.getElementById('cat-image').src = catImage;  // Update the <img> tag
    })
    .catch(error => console.error('Error fetching the cat image:', error));
}

// Optional: Fetch a random cat image when the page loads
getRandomCat();
