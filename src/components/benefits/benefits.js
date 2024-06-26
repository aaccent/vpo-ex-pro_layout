import { Pagination } from 'swiper/modules'
import createMqSwiper from 'features/createMqSwiper'

createMqSwiper({
    mq: '(max-width: 1000px)',
    obj: {
        selector: '.benefits .swiper',
        options: {
            slidesPerView: 1.08,
            spaceBetween: 8,
            modules: [ Pagination ],
            pagination: {
                type: 'progressbar',
                el: '.swiper-pagination'
            },
        }
    }
})