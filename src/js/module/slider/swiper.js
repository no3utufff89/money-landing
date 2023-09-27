new Swiper('.swiper', {
  loop: true,
  speed: 400,
  slidesPerView: 1,
  loopedSlides: 1,
  grabCursor: true,
  allowTouchMove: true,
  navigation: {
    nextEl: '.swiper-button_next',
    prevEl: '.swiper-button_prev',
  },

  breakpoints: {
    1440: {
      allowTouchMove: true,
      slidesPerView: 3,
      loopedSlides: 3,
    },
    1024: {
      slidesPerView: 3,
      loopedSlides: 3,
    },
    768: {

      slidesPerView: 2,
      loopedSlides: 2,
    }
  }
});
