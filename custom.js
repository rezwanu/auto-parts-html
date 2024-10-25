// for hero slider

var swiper = new Swiper(".hero-sliders", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 1000,
  //   autoplay: {
  //     delay: 3000,
  //   },
});

// for category slider

var swiper = new Swiper(".category-items", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: true,
  loop: true,
  speed: 1000,
  // autoplay: {
  //   delay: 3000,
  // },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
