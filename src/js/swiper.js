const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  speed: 100,

  breakpoints: {
   375: {
     slidesPerView: 1,
   },
   768: {
     slidesPerView: 2,
     spaceBetween: 16
     },
   1280: {
    slidesPerView: 3,
      spaceBetween: 16
    }
},

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
