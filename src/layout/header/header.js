import { isMobile } from 'globals/adaptive.ts'

void function() {
    const header = document.querySelector('header')

    if (!header) return

    if (isMobile) {
        const bottomMenuItems = header.querySelectorAll('.header-bottom__menu .header__menu-item')
        const headerMenu = header.querySelector('.header__menu')
        const selectLang = header.querySelector('.select-mobile')
        bottomMenuItems.forEach(item => headerMenu.append(item))
        headerMenu.append(selectLang)
    }

    const openMenu = document.querySelector('.header__menu-button')
    openMenu.addEventListener('click', () => {
        header.classList.toggle('header--menu-opened')
    })
}()





