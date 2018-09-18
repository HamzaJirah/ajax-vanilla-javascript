//create event listener
document.querySelector('#button').addEventListener('click', renderText)

//create loadText function
function renderText(){
  //Create XHRobject
   const xhr = new XMLHttpRequest();
  //OPEN-type, url/file, aync
  xhr.open('GET', 'text.txt', true);

  xhr.onload = function (){
    if(this.status == 200){
      console.log(this.responseText);
    }
  }

  //send request
  xhr.send();
}

