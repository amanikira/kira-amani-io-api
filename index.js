document.getElementById('new-cat').addEventListener('click', getRandomCat);

function getRandomCat() {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';
    const apiKey = 'live_1CsDvGUzGzKtOc8kjGA05kbzvAQ7uwobjnOEBs96hV6EcGDYvJY7ZW482vGy58Pq';

    fetch(apiUrl, {
        headers: {
            'x-api-key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const catImage = data[0].url;
        document.getElementById('cat-image').src = catImage;
    })
    .catch(error => console.error('Error fetching the cat image:', error));
}

// Optional: Fetch a random cat image when the page loads
getRandomCat();

function showBreeds() {
    document.getElementById('content').innerHTML = ''; // Clear content

    fetch('https://api.thecatapi.com/v1/breeds')
        .then(response => response.json())
        .then(breeds => {
            const breedList = document.createElement('ul');
            breeds.forEach(breed => {
                const breedItem = document.createElement('li');
                breedItem.textContent = `${breed.name}: ${breed.description}`;
                breedList.appendChild(breedItem);
            });
            document.getElementById('content').appendChild(breedList);
        })
        .catch(error => console.error('Error fetching the breeds:', error));
}

function showImages() {
    document.getElementById('content').innerHTML = ''; // Clear content

    fetch('https://api.thecatapi.com/v1/images/search?limit=5')
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const img = document.createElement('img');
                img.src = image.url;
                img.alt = 'Random cat image';
                img.width = 200;
                img.height = 200;
                document.getElementById('content').appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching the images:', error));
}
