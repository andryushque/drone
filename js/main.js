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
      nextEl: '.services-slide__btn-next',
      prevEl: '.services-slide__btn-prev',
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
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
    },
  });

  // Slider in testimonials section
  const testimonialsSlider = new Swiper(".testimonials-slider", {
    speed: 400,
    loop: true,
    navigation: {
      nextEl: '.testimonials-slide__btn-next',
      prevEl: '.testimonials-slide__btn-prev',
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
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
    },
  });
});
