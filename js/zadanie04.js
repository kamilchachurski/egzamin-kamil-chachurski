window.addEventListener('DOMContentLoaded', () => {
    function getTagsOfElements(elements) {
        let array = [];

        for (let element of elements)
            array.push(element.nodeName);
        
        return array;
    }

    console.log(getTagsOfElements(document.querySelectorAll('.sample_class')));

    function getClassesOfElement(element) {
        return element.className.split(' ');
    }

    console.log(getClassesOfElement(document.querySelector('#sample_id')));

    
    function getInnerTextsOfElements(elements) {
        let array = [];

        for (let element of elements)
            array.push(element.innerText);
        
        return array;
    }

    console.log(getInnerTextsOfElements(document.querySelectorAll('.sample_class_2 li')));

    function getAddressesOfElements(elements) {
        let array = [];

        for (let element of elements)
            array.push(element.href);
        
        return array;
    }

    console.log(getAddressesOfElements(document.querySelectorAll('a')));

    console.log(getTagsOfElements(document.querySelector('.sample_class_3').children));
});