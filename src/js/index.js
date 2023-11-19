const arrowInput = document.querySelectorAll('.drop-input');

arrowInput.forEach((arrow) => {
    arrow.addEventListener('change', function() {
        arrowInput.forEach((anyArrow) => {
            if (anyArrow !== arrow) {
                anyArrow.checked = false
            }
        })

        const input = arrow.getAttribute('id');
        const forText = document.querySelectorAll(`[for="${input}"]`);

        document.querySelectorAll('.info-text').forEach((info) => {
            info.classList.remove('show')
        })

        if(arrow.checked) {
            forText.forEach((text) => {
                text.classList.add('show')
            })
        }
    })
})