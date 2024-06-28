import Swiper from 'swiper'
import { EffectFade, Navigation } from 'swiper/modules'

new Swiper('.main-slider .swiper', {
    modules: [Navigation, EffectFade],
    navigation: {
        nextEl: '.arrow.arrow--next',
        prevEl: '.arrow.arrow--prev',
    },
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    crossFade: true,
})