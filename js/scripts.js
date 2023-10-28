let slide_combos = new Swiper(".slide-combos", {
  slidesPerView: 3,
  spaceBetween: 32,
  speed: 800,
  pagination: {
    el: ".s-combos .controle .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".s-combos .area-slide .btn.next",
    prevEl: ".s-combos .area-slide .btn.prev",
  },
});
