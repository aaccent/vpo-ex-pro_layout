import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'


new Swiper('.reviews__list.swiper', {
    modules: [ Navigation ],
    navigation: {
        nextEl: '.arrow',
        prevEl: '.arrow.arrow--prev',
    },
    slidesPerView: 1.1,
    spaceBetween: 8,
    breakpoints: {
        1000 : {
            slidesPerView: 3,
            spaceBetween: 18
        }
    }
})

void function () {
    const readMore = document.querySelectorAll('.reviews__item-btn')

    if (!readMore.length) return

    readMore.forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.textContent
            const readMore = 'Читать полностью'
            const close = 'Скрыть'

            if (text === readMore) {
                btn.textContent = close
            } else {
                btn.textContent = readMore
            }
            const description = btn.closest('.reviews__item').querySelector('.reviews__item-description')
            description.classList.toggle('_full')
        })
    })
}()

void function () {
    const rate = document.querySelectorAll('.reviews__item__stars')
    if (!rate.length) return
    rate.forEach(item => addStarts(item))
}()

function addStarts(element) {
    const starsCount = Math.round(Number(element.dataset.stars))
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div')
        star.classList.add('reviews__item__stars-item')
        element.append(star)
    }
}



