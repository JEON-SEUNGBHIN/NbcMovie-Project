const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmYzNzE2MTFiNWI3MzE0ZmU0MmNiZjA2N2I2MmYxYyIsInN1YiI6IjY2Mjg2ZDVjZTI5NWI0MDE4NzlkODdlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n718Rg3G8TIF67jv7w97iLfKjBnes9qSKNqk3ehv5Cw'
    }
};

fetch(
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));