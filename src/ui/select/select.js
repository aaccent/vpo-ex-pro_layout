void function() {
    const selects = document.querySelectorAll('.select')

    if (selects.length === 0) return

    selects.forEach(select => {
        const selected = select.querySelector('.select__selected')
        const list = select.querySelector('.select__list')
        const options = select.querySelectorAll('.select__list .select__item')
        const input = select.querySelector('input')

        select.addEventListener('click', () => {
            list.classList.toggle('_opened')
        })

        const selectedLang = selected.querySelector('button')
        if (window.location.pathname.match(/^\/en\//)) {
            selectedLang.textContent = 'EN'
        }


        options.forEach(option => {
            option.addEventListener('click', (e) => {
                selected.innerHTML = e.currentTarget.innerHTML
                input.value = e.currentTarget.textContent
            })
        })
    })
}()

void function() {
    const langBtnItems = document.querySelectorAll('.select-lang__item ')
    langBtnItems.forEach(item => {
        const attr = item.querySelector('button').textContent
        item.setAttribute('data-lang', attr.toLowerCase())
    })

    const ru = document.querySelector('li[data-lang = "ru"]')
    const en = document.querySelector('li[data-lang = "en"]')
    en.addEventListener('click', () => {
        if (!window.location.pathname.match(/^\/en\//)) {
            window.location.replace(`${window.location.origin}/en${window.location.pathname}`)
        }

    })

    ru.addEventListener('click', () => {
        if (window.location.pathname.match(/^\/en\//)) {
            const newPath = window.location.pathname.replace('/en', '')
            window.location.replace(`${window.location.origin}${newPath}`)
        }
    })
}()