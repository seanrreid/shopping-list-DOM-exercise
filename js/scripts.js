'use strict';

const generateListButton = document.querySelector('#generateList'),
  shoppingListInputs = document.querySelectorAll('.input'),
  myListDiv = document.querySelector('#myList');

function generateMyList() {
  const newText = document.createElement('p');
  newText.innerHTML = 'Hello World';
  myListDiv.appendChild(newText);
}

generateListButton.addEventListener('click', function(event) {
  event.preventDefault();
  shoppingListInputs.forEach(function(input) {
    console.log(input.value);
  });
  generateMyList();
});
