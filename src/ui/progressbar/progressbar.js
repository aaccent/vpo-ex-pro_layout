void function() {
    const progressbarItems = document.querySelectorAll('.progressbar')

    if (!progressbarItems) return

    progressbarItems.forEach(progressbar => {
        const drag = document.createElement('div')
        drag.classList.add('drag')
        progressbar.append(drag)
    })
}()