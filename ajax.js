//create event listener
const button = document.querySelector('#button');

//addEventListener
button.addEventListener('click', renderText);

//create loadText function
function renderText(){
  console.log('Hello world!');
}

renderText();
