void function () {
    const seoContent = document.querySelector('.seo__content')
    const seoBtn = seoContent.closest('.seo').querySelector('.seo__btn')

    seoBtn.addEventListener('click', () => {
        seoContent.classList.toggle('_full')

        const isFull = seoContent.classList.contains('_full')
        seoBtn.textContent = isFull ? seoBtn.dataset.closeText : seoBtn.dataset.moreText
    })
}()