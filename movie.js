//인기있는 영화 api 20개 가져오기
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
    .then(data => {
        // 영화 데이터를 받아왔을 때 실행할 코드
        const movies = data.results; // API로부터 받은 영화 데이터 배열
        
        // 영화 목록을 순회하면서 HTML 요소를 생성하고 삽입
        movies.forEach((movie, index) => {
            const mainBody = document.querySelector('.main-body');
            
            // 새로운 item 요소 생성
            const item = document.createElement('div');
            item.classList.add('item');

            // item 요소 내용 구성
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
            // 생성된 요소를 DOM에 추가
            mainBody.appendChild(item);
        });
    })
    .catch(error => {
        console.error('영화 데이터를 가져오는 중 오류가 발생했습니다:', error);
    });
