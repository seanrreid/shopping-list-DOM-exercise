'use strict';

const generateListButton = document.querySelector('#generateList'),
  shoppingListInputs = document.querySelectorAll('.input');

generateListButton.addEventListener('click', function(event) {
  event.preventDefault();
  shoppingListInputs.forEach(function(input) {
    console.log(input.value);
  });
});
