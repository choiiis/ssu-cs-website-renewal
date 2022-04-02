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

// MENU MAIN hover
const menuMainEls = document.querySelectorAll('header ul#menu__main>li a')
const menuSubEl = document.querySelector('header #menu__sub')

menuMainEls.forEach(menuMainEl => {
  menuMainEl.addEventListener("mouseover", function() {
    menuSubEl.style.display = "block";
  })
  
  menuMainEl.addEventListener("mouseout", function() {
    menuSubEl.style.display = "none";
  })
});

menuSubEl.addEventListener("mouseover", function() {
  menuSubEl.style.display = "block";
})

menuSubEl.addEventListener("mouseout", function() {
  menuSubEl.style.display = "none";
})