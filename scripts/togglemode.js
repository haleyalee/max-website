const origpos = $("#circle").offset();

var today = new Date();
var hour = today.getHours();

// 6AM - 5:59PM : light mode
if (hour>=6 && hour<18) {
  $("#start").removeClass("dark");
  $("#sun").removeClass("hidden");
  $("#moon").addClass("hidden");
  $("#circle").css("transform", "translateX(calc(origpos-24px))");
}
// 6PM - 5:59AM : dark mode
else {
  $("#start").addClass("dark");
  $("#sun").addClass("hidden");
  $("#moon").removeClass("hidden");
}


$("#circle").on("click", function() {
  document.body.classList.toggle('dark')

  const pos = $("#circle").position();

  if (document.body.classList.contains('dark')) {
    $("#sun").addClass("hidden");
    $("#moon").removeClass("hidden");
    $("#circle").css("transform", "translateX(calc(origpos-pos))");
  }
  else {
    $("#sun").removeClass("hidden");
    $("#moon").addClass("hidden");
    $("#circle").css("transform", "translateX(calc(pos-origpos))");
  }
  

});