// const sunMoonContainer = document.querySelector('#toggle-mode')

// document.querySelector('.circle').addEventListener('click', () => {
//   document.body.classList.toggle('dark')
//   console.log("clicked circle")
//   // const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
//   // sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
// })

const origpos = $("#circle").offset();
// console.log(origpos);

$("#circle").on("click", function() {
  // console.log("clicked circle")
  document.body.classList.toggle('dark')

  const pos = $("#circle").position();
  // console.log(pos);

  if(document.body.classList.contains('dark')) {
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

// $(document).ready(function(){
//   $("#circle").click(function(){
//       // $(".circle").animate({
//       //     width: "toggle"
//       // });

//       if(document.body.classList.contains('dark')) {
//         $("#circle").css("transform", "translateX(26px)");
//       }
//       else {
//         $("#circle").css("transform", "translateX(26px)");
//       }
//   });
// });