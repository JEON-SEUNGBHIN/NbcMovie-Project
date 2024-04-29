// 푸터를 가져오는 함수 정의
function fetchFooter() {
    // 캐시된 푸터가 있는지 확인
    const cachedFooter = localStorage.getItem('cachedFooter');
    if (cachedFooter) {
        document.getElementById('footer').innerHTML = cachedFooter;
    } else {
        // 헤더를 가져와서 캐시에 저장
        fetch('./footer.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('footer').innerHTML = html;
                localStorage.setItem('cachedFooter', html); // 푸터를 캐시에 저장
            })
            .catch(error => console.error('Error fetching footer:', error));
    }
}

// 페이지 로드 시 헤더를 가져오기
document.addEventListener('DOMContentLoaded', function () {
    fetchFooter();
});