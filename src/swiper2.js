const swiperTesti = new Swiper('.testimonial-swiper', {
  direction: 'horizontal',
  spaceBetween: 14,
  grabCursor: true,
  loop: true,
  slidesPerView: 'auto',
   
  pagination: {
    el: '.testimonial-swiper .swiper-pagination',
    clickable: true,
    type: 'bullets',
  },

  breaakpoint: {
    0: {
      watchOverflow: true,
    },

    640: {
      watchOverflow: true,
    },

    768: {
      watchOverflow: true,
    },

    1024: {
      watchOverflow: false,
    },

    1280: {
      watchOverflow: false,
    },
  }
});
