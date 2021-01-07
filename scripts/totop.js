$(window).scroll(function() {
  var height = $(window).scrollTop();

  if(height  > 195) {
    $("#back-to-top-button").fadeIn(250);
  }
  else {
    $("#back-to-top-button").fadeOut(250);
  }
});

function topFunction() {
  // document.body.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#start").offset().top
  }, 600);
}