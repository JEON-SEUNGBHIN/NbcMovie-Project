function fetchHeader() {
    // 캐시된 푸터가 있는지 확인
    const cachedHeader = localStorage.getItem('cachedHeader');
    if (cachedHeader) {
        document.getElementById('header').innerHTML = cachedHeader;
    } else {
        // 헤더를 가져와서 캐시에 저장
        fetch('../script/header.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('header').innerHTML = html;
                localStorage.setItem('cachedHeader', html); // 푸터를 캐시에 저장
            })
            .catch(error => console.error('Error fetching header:', error));
    }
}

// 페이지 로드 시 헤더를 가져오기
document.addEventListener('DOMContentLoaded', function () {
    fetchHeader();

    window.addEventListener('DOMContentLoaded', (event) => {
        const searchInput = document.getElementById('search');
        if (searchInput) {
            searchInput.focus(); // 검색 입력란에 포커스
        }
    });

    // 검색 이벤트 리스너 추가
    const searchForm = document.querySelector('.searchForm');
    searchForm.addEventListener('submit', handleSearch);
});



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
