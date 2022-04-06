$(document).ready(function() {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    initialSlide: 0,
    longSwipes: true,
    normalizeSlideIndex: true,
  })
});