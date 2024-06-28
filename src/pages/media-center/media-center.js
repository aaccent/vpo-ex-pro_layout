const filterBtns = document.querySelectorAll('.filter__btn')

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const activeBtn = btn.closest('.filter__btns').querySelector('._active')

        if(activeBtn !== btn) {
            activeBtn.classList.remove('_active')
            btn.classList.add('_active')
        }
    })
})