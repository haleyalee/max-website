$(document).ready(function() {
  $(window).scroll( function(){
      $('.hideme').each( function(i){
          var show_obj = $(this).offset().top + $(this).outerHeight()/6;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > show_obj ){
              $(this).animate({'opacity':'1'},500); 
          }
      }); 
  });
});