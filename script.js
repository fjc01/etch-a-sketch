function createGrid() {
    var container = document.getElementById('gridContainer');
    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 16; j++) {
        var div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('click', changeColor);
        container.appendChild(div);
      }
    }
}

function changeColor(event) {
    var randomColor = getRandomColor();
    event.target.style.backgroundColor = randomColor;
}
  
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function resetColors() {
    var boxes = document.querySelectorAll('.box');
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].style.backgroundColor = '';
    }
}

createGrid();