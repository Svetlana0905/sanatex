import { isWebp, openPopUpActions, closePopUpActions, } from './modules'
import Swiper, { Pagination, Mousewheel, Keyboard, EffectFlip, EffectFade } from 'swiper';

const swiper = new Swiper('.swiper', {
   modules: [Mousewheel, Keyboard],
   // Управление клавиатурой
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   // Управление колесом мыши
   mousewheel: {
      sensitivity: 1,
      eventsTarget: ".swiper"
   },
   slidesPerView: 3,
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      390: {
         slidesPerView: 1.3,
         spaceBetween: 20
      },
      580: {
         slidesPerView: 2,
         spaceBetween: 20
      },
      1000: {
         slidesPerView: 3,
         spaceBetween: 20
      },
   },
   grabCursor: true,
   spaceBetween: 50,
   speed: 500,
})

const swiperProduct = new Swiper('.slider1', {
   modules: [Pagination, EffectFade],
   slidesPerView: 1,
   pagination: {
      el: '.slider1__swiper-pagination',
      type: 'bullets',
      clickable: true,
   },
   nested: true,
   effect: 'fade',
   loop: true,
   grabCursor: true,
   speed: 500,
})


isWebp();
openPopUpActions();
closePopUpActions()

