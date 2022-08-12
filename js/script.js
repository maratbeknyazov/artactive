$(".header-nav-block__inO, .header-nav-block-menu__inC").on("change", function () {
  $("body").toggleClass("active");
});

$(".header-nav-block-menu__formO, .header-nav-block-menu-form__formC").on("change", function () {
  $(".header-nav-block-menu").toggleClass("active");

  if($(window).width()>1200){
    var curScrollTop = $(window).scrollTop();
    $('html').toggleClass('noscroll').css('top', '-' + curScrollTop + 'px');  
    $("body").toggleClass("active");
  }
    
});


$('.otziv-slider').slick({
    responsive: [
      {
        breakpoint: 375,
        settings: {
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: true,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // autoplay: true,
          // autoplaySpeed: 3000,
          arrows: true,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          
          infinite: true,
          arrows: true,
          centerMode: true,
          centerPadding: "240px",
        }
      }
    ]
  });

