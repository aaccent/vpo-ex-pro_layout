import Swiper from 'swiper'
import { EffectFade, Navigation } from 'swiper/modules'

new Swiper('.stock-section .swiper', {
    modules: [ EffectFade, Navigation ],
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        prevEl: '.arrow--prev',
        nextEl: '.arrow--next',
    }
})