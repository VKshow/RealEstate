$(document).ready(function(){
    $('.slider').slick({
        
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        infinite: true,
        loop: true,
        
        slidesToShow: 3,
        slidesToScroll: 1,
        
    });
  });
  
  // slider 4
  $(document).ready(function () {
    $('.carousel__inner').slick({
      centerMode: true,

      arrows: false,
      speed: 3000,
      adaptiveHeight: true,
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,

    });
  });

