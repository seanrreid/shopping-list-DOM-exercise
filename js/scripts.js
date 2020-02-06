'use strict';

const generateList = document.querySelector('#generateList'),
  myList = document.querySelector('#myList'),
  itemList = document.querySelectorAll('input');

function createListFromInput(list) {
  const listElement = document.createElement('ul');

  list.forEach(function(input) {
    const listItem = document.createElement('li');
    listItem.innerHTML = input.value;
    listElement.appendChild(listItem);
  });

  return listElement;
}

generateList.addEventListener('click', function(e) {
  const theList = createListFromInput(itemList);
  myList.append(theList);
});
