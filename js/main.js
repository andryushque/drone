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
  // 02-1. Slider in services section
  const servicesSlider = new Swiper(".services-slider", {
    speed: 400,
    loop: true,
    navigation: {
      nextEl: '.services__button-next',
      prevEl: '.services__button-prev',
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

  // 02-2. Slider in projects section
  const projectsSlider = new Swiper(".projects-slider", {
    speed: 400,
    loop: true,
    navigation: {
      nextEl: '.projects__button-next',
      prevEl: '.projects__button-prev',
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

  // 02-3. Slider in testimonials section
  const testimonialsSlider = new Swiper(".testimonials-slider", {
    speed: 800,
    loop: true,
    navigation: {
      nextEl: '.testimonials__button-next',
      prevEl: '.testimonials__button-prev',
    },
    slidesPerView: 1,
  });
});
