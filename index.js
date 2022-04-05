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


  // $('form').on('submit', function(e) {
  //   e.preventDefault();

  //   $.ajax({
  //     type: 'post',
  //     url: 'contact-form.php',
  //     data: $('form').serialize(),
  //     success: function() {
  //       alert("Form was submitted")
  //     }
  //   });
  // });

  // $("#contact-form").ajaxSubmit({url: 'contact-form.php', type: 'post'})

});