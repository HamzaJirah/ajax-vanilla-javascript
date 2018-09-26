const button = document.querySelector('#button');
const form = document.querySelector('#getForm');

button.addEventListener('click', requestName);
form.addEventListener('click', getForm);

function requestName(){
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'process.php', true);

  httpRequest.onload = function(){
    console.log(this.responseText);
  }
  httpRequest.send();
}