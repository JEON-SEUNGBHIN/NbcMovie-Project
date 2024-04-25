fetch('./header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
    })
    .catch(error => console.error('Error fetching header:', error));

    async function search(event) {
        event.preventDefault(); // 기본 제출 동작 방지
    
        // 입력 상자에서 입력된 검색어를 가져옴
        const searchInput = document.getElementById('search').value.toLowerCase();
    
        // 영화 목록을 가져옴
        const movies = await fetchMovies();
    
        // 영화 목록에서 검색어를 포함하는 영화들을 필터링하여 새로운 배열 생성
        const filteredMovies = movies.filter(movie => {
            return movie.title.toLowerCase().includes(searchInput);
        });
    
        // 검색 결과를 화면에 표시
        displayMovies(filteredMovies);
    }
    
