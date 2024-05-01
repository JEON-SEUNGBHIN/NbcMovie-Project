// header.js
fetch('header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch header');
        }
        return response.text();
    })
    .then(headerHtml => {
        document.getElementById('header').innerHTML = headerHtml;
        // 헤더를 가져온 후에 검색 이벤트 핸들러 추가
        addSearchEventListener();
    })
    .catch(error => console.error('Error fetching header:', error));

// 검색 이벤트 핸들러 함수
function handleSearch(event) {
    event.preventDefault(); // 제출 이벤트의 기본 동작을 중지
    const searchInput = document.getElementById('search');
    const searchTerm = searchInput.value.toLowerCase().trim();

    console.log("Search Term:", searchTerm);

    if (searchTerm === '') {
      alert('검색어를 입력하세요!');
        return;
    }
    // 검색어를 포함하여 search.html로 이동
    window.location.href = `search.html?query=${encodeURIComponent(searchTerm)}`;
}

// 검색 이벤트 리스너 추가 함수
function addSearchEventListener() {
    document.querySelector('.searchForm').addEventListener('submit', handleSearch);

    // 검색 입력란에 포커스
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.focus();
    }
}
