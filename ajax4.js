// const button = document.querySelector('#button');
const form = document.querySelector('#getForm');

// button.addEventListener('click', requestName);
form.addEventListener('submit', getForm);

/*function requestName(){
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'process.php', true);

  httpRequest.onload = function(){
    console.log(this.responseText);
  }
  httpRequest.send();
}*/

//GETFORM FUNCTION
function getForm(e){
  e.preventDefault();
  const name = document.querySelector('#name1').value;
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'process.php?name=' +name, true);

  httpRequest.onload = function(){
    console.log(this.responseText);
  }
  httpRequest.send();
}