fetch('footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch header');
        }
        return response.text();
    })
    .then(headerHtml => {
        document.getElementById('footer').innerHTML = headerHtml;
    })
    .catch(error => console.error('Error fetching header:', error));