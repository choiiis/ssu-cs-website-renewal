// toggle nav
const navToggleBtn = document.querySelector(".material-icons#toggle-btn")
const navEl = document.querySelector("nav")
const closeBtn = document.querySelector(".material-icons#close-btn")

// screen resized
window.addEventListener("resize", resizeScreen = () => {
  // 화면 너비 900 넘으면 nav 제거
  if(document.body.clientWidth > 900) {
    if(navEl.style.display === "block") {
      navEl.style.display = "none";
      navToggleBtn.style.opacity = 1;
    }
  }
})

// 네비게이션 show/hide
navToggleBtn.addEventListener("click", function() {
  if(navEl.style.display === "none" || navEl.style.display === "") {
    navEl.style.display = "block";
    navToggleBtn.style.opacity = 0;
  }
})

closeBtn.addEventListener("click", function() {
  if(navEl.style.display === "block") {
    navEl.style.display = "none";
    navToggleBtn.style.opacity = 1;
  }
})

// 네비게이션 메인 메뉴 클릭 시 상세 메뉴 오픈
for(let i = 1; i <= 5; i++) {
  const navMainEl = document.querySelector(`.nav__main>li:nth-child(${i}) .nav__item`)
  const navSubEl = document.querySelector(`.nav__main>li:nth-child(${i}) .nav__sub`)

  navMainEl.addEventListener("click", function() {
    if(navSubEl.style.display === "none" || navSubEl.style.display === "") {
      navSubEl.style.display = "block";
    }
    else if(navSubEl.style.display === "block") {
      navSubEl.style.display = "none";
    }
  })
}

// SWIPER
new Swiper('.swiper', {
  direction: 'horizontal',
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  }, // 자동 재생
  loop: true, // 반복 재생
  pagination: {
    el: '#teaser .swiper-pagination', // 페이지 번호 요소 선택자 (동글뱅이). 어떤 요소를 사용할건지
    clickable: true // 페이지 번호 요소 제어할 수 있는지(페이지네이션 클릭 시)
  },
  navigation: {
    prevEl: '#teaser .swiper-prev', // 이전 슬라이드 보는 버튼
    nextEl: '#teaser .swiper-next', // 다음 슬라이드 보는 버튼
  }
}); // 생성자