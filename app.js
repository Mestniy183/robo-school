var swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-custom-next",
      prevEl: ".swiper-button-custom-prev",
    },
    slidesPerView: 'auto',
    loop: true,
    breakpoints: {
        320: {
            spaceBetween: 20
        },
        576: {
            spaceBetween: 40
        }
    }
  });