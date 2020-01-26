window.addEventListener('DOMContentLoaded', () => {
    for (let element of document.querySelectorAll('button')) {
        element.addEventListener('click', () => {
            document.querySelector('#container').innerText = element.dataset.text;
        });
    }
});