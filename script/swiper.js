 // 기본
    var swiper = new Swiper(".basic", {
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
       pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // 갤러리
     var swiper2 = new Swiper(".autoplay", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
       slidesPerView: 2,
       loop: true,
    });