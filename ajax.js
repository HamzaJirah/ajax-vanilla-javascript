//create event listener
const button = document.querySelector('#button');

//addEventListener
button.addEventListener('click', loadText);

//create loadText function
function loadText(){
  console.log('Hello world!');
}

loadText();
