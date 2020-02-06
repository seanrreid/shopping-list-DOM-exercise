'use strict';

const randomArray = [{ value: 'Foo' }, { value: 'Bar' }, { value: 'Baz' }];

const generateListButton = document.querySelector('#generateList'),
  shoppingListInputs = document.querySelectorAll('.input'),
  myListDiv = document.querySelector('#myList');

function generateMyList(list) {
  const listElement = document.createElement('ul');

  list.forEach(function(input) {
    const listItem = document.createElement('li');
    listItem.innerHTML = input.value;
    listElement.appendChild(listItem);
  });

  return listElement;
}

function renderNamedList(listElement, listName) {
  const container = document.createElement('div');
  const title = document.createElement('h1');
  title.innerHTML = listName;
  container.appendChild(title);
  container.appendChild(listElement);

  myListDiv.appendChild(container);
}

generateListButton.addEventListener('click', function(event) {
  event.preventDefault();
  const theList = generateMyList(shoppingListInputs);
  const randomList = generateMyList(randomArray);

  // myListDiv.appendChild(theList);
  // myListDiv.appendChild(randomList);

  renderNamedList(theList, 'Food');
  renderNamedList(randomList, 'Random Array');
});
