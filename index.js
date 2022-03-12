$(document).ready(function() {

  //Flickity for client list
  var elem = document.querySelector(".clients-carousel");
  var flkty = new Flickity(elem, {
    cellAlign: "left",
    freeScroll: true,
    prevNextButtons: false,
    pageDots: true,
    wrapAround: false,
  });

});