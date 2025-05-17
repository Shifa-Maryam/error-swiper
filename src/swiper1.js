const swiperGallery = new Swiper('.gallery-swiper', {
  direction: 'horizontal',
  spaceBetween: 14,
  grabCursor: true,
  loop: true,
  slidesPerView: 'auto',

  scrollbar: {
    el: '.gallery-swiper .swiper-scrollbar ',
    draggable: true,
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