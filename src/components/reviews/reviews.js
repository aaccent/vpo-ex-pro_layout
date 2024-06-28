import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'


new Swiper('.reviews__list.swiper', {
    modules: [ Navigation ],
    navigation: {
        nextEl: '.arrow.arrow--next',
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

    readMore.forEach(btn => {
        btn.addEventListener('click', () => {
            const description = btn.closest('.reviews__item').querySelector('.reviews__item-description')
            description.classList.toggle('_full')
            const isActive = description.classList.contains('_full')
            btn.textContent = isActive ? btn.dataset.closeText : btn.dataset.moreText
        })
    })
}()

void function () {
    const rate = document.querySelectorAll('.reviews__item__stars')
    if (!rate.length) return
    rate.forEach(item => addStars(item))
}()

function addStars(element) {
    const starsCount = Math.round(Number(element.dataset.stars))
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div')
        star.classList.add('star')
        element.append(star)
    }
}



