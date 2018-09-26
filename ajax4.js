const button = document.querySelectorAll('#button');

button.addEventListener('click', requestName);

function requestName(){
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'process.php', true);
}