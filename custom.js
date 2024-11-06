// for mobile menubar

function openSideMenu() {
  const sideMenu = document.querySelector(".side-menu");

  sideMenu.style.display = "flex";
}

function closeSideMenu() {
  const sideMenu = document.querySelector(".side-menu");
  sideMenu.style.display = "none";
}

// for hero slider

var swiper = new Swiper(".hero-sliders", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 1000,
  //   autoplay: {
  //     delay: 3000,
  //   },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
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

// for isotop

// var elem = document.querySelector(".grid");
// var iso = new Isotope(elem, {
//   // options
//   itemSelector: ".grid-item",
//   layoutMode: "fitRows",
// });
