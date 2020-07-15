
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


function slickAdvosprSlider() {
    $('.slider-advisor').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider-advisor-nav'
    });
    $('.slider-advisor-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider-advisor',
      dots: true,
      focusOnSelect: true,
      centerMode: true,
      centerPadding: '84px',
      responsive: [
        {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              asNavFor: '.slider-advisor',
              dots: true,
              focusOnSelect: true,
              centerMode: true,
              centerPadding: '48px',
          }
        }
      ]
    });       
}



















/* Back to top page */
function backToTop() {
  $('[data-back="top"]').on('click', function(){
    $('html, body').animate({scrollTop: $('body').offset().top}, 800);
  });
}


/* Back to top Button */
function BackToTopSticky() {
    if($('body').find('.btn-floating').length > 0){
        $(window).scroll(function(){

            var WindowTop = $(window).scrollTop();
            var BackToTop = parseInt($('.btn-floating').offset().top) + 40;            
            if (WindowTop > 600) {
                $('.btn-floating').addClass('active');
            } else {
                $('.btn-floating').removeClass('active');
            }
        }).scroll();
    }    
}




// function init
$(function() {       
    backToTop();
    BackToTopSticky();
    slickAdvosprSlider();
    
}); 
$(window).resize(function() {

});

