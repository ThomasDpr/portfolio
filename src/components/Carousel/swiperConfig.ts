import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  FreeMode,
  EffectCoverflow,
} from "swiper/modules";
import { SwiperProps } from "swiper/react";

export const swiperConfig: SwiperProps = {

  modules: [
    Navigation,
    Pagination,
    Autoplay,
    Keyboard,
    FreeMode,
    EffectCoverflow,
  ],
  spaceBetween: 71,
  slidesPerView: 3,
  // grabCursor: true,
  direction: "horizontal",
  keyboard: { enabled: true },
  pagination: {                       //pagination(dots)
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {                       //navigation(arrows)
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  freeMode:{
    enabled: true,
    sticky: true,
  },
  centeredSlides: true,
  loop: true,
  loopedSlides: 2,
  loopPreventsSliding: true,
  speed: 800,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    10: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 71,
    },
  },

  // autoplay: { //Stop on focus:
  //   delay: 2500,
  //   pauseOnMouseEnter: true,
  //   disableOnInteraction: false,
  //   waitForTransition: true,
  //  },

// Ceci sera a remettre dans les imports du ficher Carousel.tsx si il y a un problème:
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";
// import "swiper/scss/scrollbar";
// import "swiper/scss/effect-fade";
// import "swiper/scss/effect-coverflow";
// import "swiper/scss/effect-creative";
};
