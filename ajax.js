//create event listener
const button = document.querySelector('#button');

button.addEventListener('click', renderText);

//create loadText function
function renderText(){
  //Create XHR Object
   const xhr = new XMLHttpRequest();
  //OPEN-type, url/file, aync
  xhr.open('GET', 'text.txt', true);

  xhr.onload = function (){
    if(this.status == 200){
      console.log(this.responseText);
    }
  }

  //Sends request
  xhr.send();
}

//HTTP Status
//200: "OK"
//403: "Forbidden"
//404: "Not Found"

