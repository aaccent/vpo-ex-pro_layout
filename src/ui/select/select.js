
void function () {
  const selects = document.querySelectorAll('.select')

  if (selects.length === 0) return

  selects.forEach(select => {
    const selected = select.querySelector('.select__selected')
    const list = select.querySelector('.select-options')
    const options = select.querySelectorAll('.select-options .select__item')

    select.addEventListener('click', () => {
      list.classList.toggle('_opened')
    })

    options.forEach(option => {
      option.addEventListener('click', (e) => {
        selected.innerHTML = e.currentTarget.innerHTML
      })
    })
  })
}()