// $('').slick({
//   responsive: [
//     {
//       breakpoint: 375,
//       settings: {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         fade: true,
//         cssEase: 'linear'
//       }
//     },
//   ]
// });

$('.card-list').slick({
  responsive: [
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      }
    },
    {
      breakpoint: 1100,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      }
    },
    {
      breakpoint: 1400,
      settings: {
        infinite: true,
        arrows: true,
        centerMode: true,
        // centerPadding: "240px",
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      }
    }
  ]
});



$('.review-slider').slick({
  responsive: [
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
      }
    },
    {
      breakpoint: 1100,
      settings: {
        arrows: false,
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