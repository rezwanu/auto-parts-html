// for mobile menubar
// ========================== For Mobile Menubar ============================

function openSideMenu() {
  const sideMenu = document.querySelector(".side-menu");
  sideMenu.style.display = "flex";
}

function closeSideMenu() {
  const sideMenu = document.querySelector(".side-menu");
  sideMenu.style.display = "none";
}

// ========================== For Hero Slider ============================

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

// ========================== For Category Slider ============================

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

// ========================== For Countdown ============================

// Set the end date and time for the countdown
const endDate = new Date("2025-12-31T23:59:59").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const distance = endDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.querySelector(".day").innerText = days;
  document.querySelector(".hour").innerText = hours;
  document.querySelector(".minute").innerText = minutes;
  document.querySelector(".second").innerText = seconds;

  // If countdown is over, display "00" in all elements and clear the interval
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelectorAll(".timer-item-count").forEach((element) => {
      element.innerText = "00";
    });
  }
}, 1000);

// FAQ Section

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
