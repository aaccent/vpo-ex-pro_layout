
void function () {
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
      option.addEventListener('click', (e) => {
        selected.innerHTML = e.currentTarget.innerHTML
        input.value = e.currentTarget.textContent
      })
    })
  })
}()