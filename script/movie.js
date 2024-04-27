const apiKey = '66f371611b5b7314fe42cbf067b62f1c';

document.addEventListener('DOMContentLoaded', function () {
    // 영화 목록 가져오기
    TopRatedMovies();
});

// 인기 있는 영화 목록을 가져오는 함수
function TopRatedMovies() {
    fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=' + apiKey
    )
        .then(response => response.json())
        .then(data => {
            const movies = data.results;
            displayMovies(movies);
        })
        .catch(error => {
            console.error('영화 데이터를 가져오는 중 오류가 발생했습니다:', error);
        });
}

// 영화 목록을 화면에 표시하는 함수
function displayMovies(movies) {
    const mainBody = document.querySelector('.main-body');
    movies.forEach((movie, index) => {
        const item = document.createElement('div');
        item.classList.add('item');
        item.dataset.id = movie.id;

        item.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" id="movies-img">
            <div class="item-body">
                <h2>${index + 1}</h2>
                <h3 class="movies-title">${movie.title}</h3>
                <h5 class="movies-content">${movie.overview}</h5>
                <div class="item-detail">
                    <h4>개봉일: </h4> 
                    <h4 id="movie-date">${movie.release_date}</h4>
                    <i class="fa fa-star" id="scores"></i>
                    <h5 id="movies-score">${movie.vote_average}</h5>
                </div>
            </div>
        `;
        mainBody.appendChild(item);

        item.addEventListener('click', function(event) {
            const movieId = event.currentTarget.dataset.id;
            alert(`선택된 영화 ID: ${movieId} 입니다!`);
        });
    });
}
