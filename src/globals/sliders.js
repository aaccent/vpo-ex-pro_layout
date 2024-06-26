import createMqSwiper from 'features/createMqSwiper'
import { Pagination } from 'swiper/modules'

createMqSwiper({
    mq: '(max-width: 1000px)',
    obj: {
        selector: ':is(.benefits, .stages) .swiper',
        options: {
            slidesPerView: 1.08,
            spaceBetween: 8,
            modules: [ Pagination ],
            pagination: {
                type: 'progressbar',
                el: '.swiper-progressbar'
            },
        }
    }
})