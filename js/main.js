$(document).ready(function () {
  /*=== 01. Slick Nav ===*/
  // Header mobile menu
    const mmenu = $('ul#header-navigation');
    if(mmenu.length){
      mmenu.slicknav({
        prependTo: ".mmenu",
        closedSymbol: '+',
        openedSymbol: '-'
      });
    };

  /*=== 02. Swiper Slider ===*/
  // Slider in services section
  const servicesSlider = new Swiper(".services-slider", {
    speed: 400,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
    },
  });
});
