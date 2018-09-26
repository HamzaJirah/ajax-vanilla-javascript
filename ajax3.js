//select elements from html document
const button = document.querySelector('#button');
const users = document.querySelector('#users');

//addEventListener to button variable
button.addEventListener('click', renderUsers);

//write renderUsers function