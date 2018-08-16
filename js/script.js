$(document).ready(function() {

  $(window).scroll(function() {
    $('.animation').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 300) {
        $(this).addClass("bounce");
      }
    });
  });

  $('.element').css('visibility', 'hidden');

});
