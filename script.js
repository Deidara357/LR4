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
            element.style.color = 'pink';
        }
        element8Clicked = !element8Clicked;
    } else if (elementId === 'element9') {
        const element = document.querySelector('#element9');
        if (element9Clicked) {
            element.style.backgroundColor = 'blue';
            element.style.color = 'pink';
        } else {
            element.style.backgroundColor = 'green';
            element.style.color = 'black';
        }
        element9Clicked = !element9Clicked;
    }
}

function addImage() {
    var imageUrl = prompt('Введіть URL зображення:');
    if (imageUrl) {
      document.getElementById('main-image').src = imageUrl;
    }
}
  
function zoomIn() {
    var image = document.getElementById('main-image');
    var currentWidth = image.width;
    image.style.width = (currentWidth * 1.2) + 'px';
}
  
function zoomOut() {
    var image = document.getElementById('main-image');
    var currentWidth = image.width;
    image.style.width = (currentWidth / 1.2) + 'px';
}
  
function deleteImage() {
    var confirmation = confirm('Ви впевнені, що хочете видалити зображення?');
    if (confirmation) {
      document.getElementById('main-image').src = '';
    }
}
