$(document).ready(function() {

/* Scroll animation script */

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

/* Slideshow script */

var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
var dotId = ["dot", "dot2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(dotId[no]);
  if (n > slides.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[no]-1].style.display = "block";
  dots[slideIndex[no]-1].className += " active";
}

/* parallax effect */

$(function() {
    $(window).on('scroll', function() {
        $('#background').css('margin-top', $(window).scrollTop() * -.3);
    });
});
