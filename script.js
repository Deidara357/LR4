let element8Clicked = false;
let element9Clicked = false;

function changeColor(elementId) {
    if (elementId === 'element8') {
        const element = document.getElementById(elementId);
        if (element8Clicked) {
            element.style.backgroundColor = 'green';
            element.style.color = 'black';
        } else {
            element.style.backgroundColor = 'blue';
            element.style.color = 'white';
        }
        element8Clicked = !element8Clicked;
    } else if (elementId === 'element9') {
        const element = document.querySelector('#element9');
        if (element9Clicked) {
            element.style.backgroundColor = 'blue';
            element.style.color = 'white';
        } else {
            element.style.backgroundColor = 'green';
            element.style.color = 'black';
        }
        element9Clicked = !element9Clicked;
    }
}
