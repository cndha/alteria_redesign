$(document).ready(function() {

  //Flickity for client list
  // var elem = document.querySelector(".clients-carousel");
  
  // var flkty = new Flickity(elem, {
  //   cellAlign: "left",
  //   freeScroll: true,
  //   prevNextButtons: false,
  //   pageDots: false,
  //   wrapAround: false,
  // });

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 0,
  })

});