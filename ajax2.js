//select html elements
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

//addEventListener
button1.addEventListener('click', renderUser)
button2.addEventListener('click', renderUsers)

//creeate user function
function renderUser(){
  //create httpRequest Object
  const httpRequest = new XMLHttpRequest();
  //open httpRequest
  httpRequest.open('GET', 'user.json', true);
  //use onload function
  
}