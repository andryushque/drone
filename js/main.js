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

  /*=== 03. To Top Button ===*/
  const topButton = $(".top-button");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      topButton.addClass("show");
    } else {
      topButton.removeClass("show");
    }
  });
  topButton.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "750");
  });

  /*=== 04. Nice Select plugin ===*/
  const select = $('.form__select');
  if(select.length){
    select.niceSelect();
  }

  /*=== 05. Sticky Header ===*/
  $(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 400) {
    $(".header").removeClass("header--sticky");
  } else {
    $(".header").addClass("header--sticky");
  }
  });
});
