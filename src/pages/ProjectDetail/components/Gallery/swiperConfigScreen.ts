import {
  Navigation,
  Pagination,
  FreeMode,
  Keyboard,
} from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperProps } from 'swiper/react';

export const swiperConfigScreen: SwiperProps = {
  modules: [Navigation, Pagination, FreeMode, Keyboard],
  spaceBetween: 30,
  slidesPerView: 1,
  direction: 'vertical',
  keyboard: { enabled: true },
  pagination: {                       //pagination(dots)
    el: '.swiper-pagination-screen',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet-screen',
    bulletActiveClass: 'swiper-pagination-bullet-active-screen',
    verticalClass: 'swiper-pagination-vertical-screen',

  },
  navigation: {                       //navigation(arrows)
    nextEl: ".swiper-button-next-screen",
    prevEl: ".swiper-button-prev-screen",
  },
  loop: true,
  speed: 500,
};
