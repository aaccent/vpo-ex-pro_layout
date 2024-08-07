const forms = document.querySelectorAll<HTMLFormElement>('form[data-handler]')
forms.forEach(form => {
    form.addEventListener('submit', submitHandler)
})

const formSent = new CustomEvent('formSent')

function submitHandler(e: SubmitEvent) {
    e.preventDefault()

    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)

    const handlerPath = form.dataset.handler
    if (!handlerPath) return console.error('data-handler should be not empty. Form element:\n', form)

    if (!validateForm(form)) return

    fetch(handlerPath, {
        method: 'POST', body: formData,
    }).then((res) => {
        if (!res.ok) {
            return console.error('Error while submitting form\n', 'FormData:\n', formData, '\n', ' Response:\n', res)
        }

        form.classList.add('_complete')
        form.dispatchEvent(formSent)
    })
}

function createInvalidInput(input: HTMLInputElement) {
    if (!input.parentElement) return
    if (input.parentElement.classList.contains('input__wrapper')) return

    const inputWrapper = document.createElement('div')
    inputWrapper.className = 'input__wrapper'
    inputWrapper.innerHTML = `<div class="input__error">${input.dataset.requiredError}</div>`

    input.parentElement.insertBefore(inputWrapper, input)
    inputWrapper.prepend(input)
}

function validateForm(form: HTMLFormElement): Boolean {
    let valid = true

    const requiredInputs = form.querySelectorAll<HTMLInputElement>('input[required]')

    requiredInputs.forEach(input => {
        if (input.type === 'text' && input.value !== '') return
        if (input.type === 'tel') {
            const digits = input.value.match(/\d/g)
            if (digits?.length === 11) return
        }

        valid = false
        input.classList.add('invalid')
        createInvalidInput(input)
        input.addEventListener('input', () => input.classList.remove('invalid'), { once: true })
    })

    return valid
}