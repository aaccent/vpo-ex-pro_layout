import Swiper from 'swiper'
import { EffectFade, Navigation } from 'swiper/modules'

new Swiper('.gallery .swiper', {
    modules: [Navigation, EffectFade],
    navigation: {
        nextEl: '.arrow',
        prevEl: '.arrow .arrow--prev',
    },
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    crossFade: true,
})