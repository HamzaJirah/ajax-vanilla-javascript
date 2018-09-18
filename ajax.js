//create event listener
const button = document.querySelector('#button');

button.addEventListener('click', renderText);

//create loadText function
function renderText(){
  //Create XHR Object
   const xhr = new XMLHttpRequest();
  //OPEN-type, url/file, aync
  xhr.open('GET', 'text.txt', true);

  //USING ONLOAD FUNCTION
  // xhr.onload = function (){
  //   if(this.status === 200){
  //     // console.log(this.responseText);
  //   }
  // }

  //USING OnReadyStateChange FUNCTION
  xhr.onreadystatechange


  //Sends request
  xhr.send();
}

//HTTP Status
//200: "OK"
//403: "Forbidden"
//404: "Not Found"

