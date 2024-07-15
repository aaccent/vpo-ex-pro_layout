import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger)


void function() {
    const contentImages = document.querySelectorAll('.content img')
    if (!contentImages.length) return

    contentImages.forEach(image => {
        ScrollTrigger.matchMedia({
            '(min-width: 1000px)': function() {
                gsap.to(image, {
                    scrollTrigger: {
                        trigger: image,
                        start: 'top 70%',
                        end: '80% 50%',
                        scrub: true,
                        onLeave: () => ScrollTrigger.refresh()
                    }, maxWidth: '100%', width: '100%', height: '600px', marginLeft: 0, marginRight: 0,
                })
            },
        })
    })
}()

void function() {
    const itemsWrapper = document.querySelector('.benefits__list-wrapper')
    if (!itemsWrapper) return

    const itemsList = document.querySelector('.benefits__list')
    const translateY = itemsList.offsetHeight - itemsWrapper.offsetHeight + 50

    ScrollTrigger.matchMedia({
        '(min-width: 1000px)': function() {
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.benefits',
                    start: '30% 30%',
                    pin: true,
                    scrub: 1,
                },
            })
                .fromTo(itemsList, {
                    y: 0,
                }, {
                    y: -translateY,
                })
                .fromTo('.benefits__content .progressbar .drag', {
                    width: 0,
                }, { width: '100%' }, 0)
        },
    })
}()

void function() {
    const itemsWrapper = document.querySelector('.stages__list-wrapper')
    if (!itemsWrapper) return

    const itemsList = document.querySelector('.stages__list')
    const translateX = itemsList.offsetWidth - itemsWrapper.offsetWidth + 160

    ScrollTrigger.matchMedia({
        '(min-width: 1000px)': function() {
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.stages',
                    start: '60% 50%',
                    end: '100% 20%%',
                    pin: true,
                    scrub: 1,
                },
            })
                .fromTo(itemsList, {
                    x: 0,
                }, {
                    x: -translateX,
                })
                .fromTo('.stages .drag', {
                    width: 0,
                }, { width: '100%' }, 0)
        },
    })
}()