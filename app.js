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
    freeMode: true,
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

  const burgerElement = document.querySelector('.header__burger');
  const itemsElement = document.querySelector('.header__items');
  burgerElement.addEventListener('click', () => {
    itemsElement.classList.toggle('open')
    burgerElement.classList.toggle('open')
  })