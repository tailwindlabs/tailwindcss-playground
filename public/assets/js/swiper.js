// http://idangero.us/swiper/api/


var swiper = new Swiper('.swiper-container-hero', {
  effect: 'fade',
  centeredSlides: true,
  speed: 2000,
  autoplay: 2000,
  pagination: '.swiper-pagination-hero',
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});


var swiper = new Swiper('.swiper-container', {
  // Default parameters
  slidesPerView: 3,
  spaceBetween: 20,
  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: '.swiper-pagination',
      paginationClickable: true,
    }
  }
})


