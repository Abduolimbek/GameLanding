const burgerBtn = document.querySelector(".burger__btn");
const langIcon = document.querySelector(".fa-angle-down");
const langs = document.querySelectorAll(".media__dropdown .media__lang-text");

burgerBtn.addEventListener("click", e => {
  document.querySelector(".navbar").classList.toggle("header__navbar--active");
  burgerBtn.classList.toggle("active");
  document.body.classList.toggle('hidden');
});

document.body.addEventListener('click', ({target}) => {
  if (target.classList.contains('fa-angle-down')) document.querySelector(".media__lang").classList.toggle('active');
  else {
    document.querySelector(".media__lang").classList.remove('active');
  }
})

langs.forEach(lang => {
  document.querySelector(".media__lang .media__lang-text").textContent = 'ENG'
  lang.addEventListener("click", () => {
    document.querySelector(".media__lang .media__lang-text").textContent = lang.textContent;
    document.querySelector(".media__lang").classList.remove("active");
  });
});

///swiper
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});
//wow
new WOW().init();