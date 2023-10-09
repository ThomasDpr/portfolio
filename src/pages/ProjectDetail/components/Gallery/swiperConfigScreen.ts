import {
  Navigation,
  Pagination,
  Keyboard,
  Zoom,
} from 'swiper/modules';
import { SwiperProps } from 'swiper/react';

export const swiperConfigScreen: SwiperProps = {
  modules: [Navigation, Pagination, Keyboard, Zoom],
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
  breakpoints: {
    10: {
      direction: 'horizontal',
    },
    968: {
      direction: 'vertical',
    },
  },
  zoom: {
    maxRatio: 1.5,
    minRatio: 0.5,
  }
};
