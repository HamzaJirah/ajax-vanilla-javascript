const button = document.querySelector('#button');
const button = document.querySelector('#getForm');

button.addEventListener('click', requestName);

function requestName(){
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'process.php', true);

  httpRequest.onload = function(){
    console.log(this.responseText);
  }
  httpRequest.send();
}