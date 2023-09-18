let swiper = new Swiper(".mySwiper", {
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  centeredSlides: true,
  breakpoints: {
    550: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    990: {
      slidesPerView: 3,
    },
  },
});
