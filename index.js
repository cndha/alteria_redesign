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

  let form = document.getElementById("contact-form");
  async function handleSubmit(e) {
    e.preventDefault();

    let status = document.getElementById("submit-status");
    let data = new FormData(e.target);

    fetch(e.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(res => {
      if(res.ok) {
        status.innerHTML = "Thanks for your submission.";
        form.reset()
      } else {
        res.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data['errors'].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form. Please try again."
          }
        })
      }
    }).catch(err => {
      status.innerHTML = "Oops! There was a problem submitting your form. Please try again."
    })
  }

  form.addEventListener("submit", handleSubmit);

});