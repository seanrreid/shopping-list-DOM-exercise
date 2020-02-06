'use strict';

const generateListButton = document.querySelector('#generateList'),
  shoppingListInputs = document.querySelectorAll('.input'),
  myListDiv = document.querySelector('#myList');

function generateMyList() {
  shoppingListInputs.forEach(function(input) {
    const newText = document.createElement('p');
    newText.innerHTML = input.value;
    myListDiv.appendChild(newText);
  });
}

generateListButton.addEventListener('click', function(event) {
  event.preventDefault();
  generateMyList();
});
