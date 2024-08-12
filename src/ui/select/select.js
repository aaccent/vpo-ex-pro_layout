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

        options.forEach(option => {
            if (option.closest('.select-lang')) {
                const attr = option.querySelector('button').textContent
                option.setAttribute('data-lang', attr.toLowerCase())
            } else {
                option.addEventListener('click', (e) => {
                    selected.innerHTML = e.currentTarget.innerHTML
                    input.value = e.currentTarget.textContent
                })
            }
        })
    })
}()

void function() {
    const langSelect = document.querySelector('.select-lang')
    const selected = langSelect.querySelector('.select__selected')
    const ru = langSelect.querySelector('li[data-lang = "ru"]')
    const en = langSelect.querySelector('li[data-lang = "en"]')

    if (window.location.pathname.match(/^\/en\//)) {
        selected.innerHTML = en.innerHTML
    }

    en.addEventListener('click', () => {
        selected.innerHTML = en.innerHTML
        if (!window.location.pathname.match(/^\/en\//)) {
            window.location.replace(`${window.location.origin}/en${window.location.pathname}`)
        }
    })

    ru.addEventListener('click', () => {
        selected.innerHTML = ru.innerHTML
        if (window.location.pathname.match(/^\/en\//)) {
            const newPath = window.location.pathname.replace('/en', '')
            window.location.replace(`${window.location.origin}${newPath}`)
        }
    })
}()