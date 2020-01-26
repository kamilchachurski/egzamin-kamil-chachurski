window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#button-1').addEventListener('click', () => {
        let liElement = document.createElement('li');

        liElement.innerText = 'Chleb';

        document.querySelector('#shopping-list').appendChild(liElement);
    });

    document.querySelector('#button-2').addEventListener('click', () => {
        document.querySelector('#shopping-list').lastElementChild
            && document.querySelector('#shopping-list').lastElementChild.remove();
    });

    document.querySelector('#button-3').addEventListener('click', () => {
        document.querySelector('#shopping-list').children[1]
            && document.querySelector('#shopping-list').appendChild(document.querySelector('#shopping-list').children[1].cloneNode(true));
    });
});