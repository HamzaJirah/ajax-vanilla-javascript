//create event listener
const button = document.querySelector('#button');

button.addEventListener('click', renderText);

//create loadText function
function renderText(){
  //Create XHR Object
   const xhr = new XMLHttpRequest();
  //OPEN-type, url/file, aync
  xhr.open('GET', 'text.txt', true);

  console.log("READYSTATE ", xhr.readyState);

  //onprogress-OPTIONAL-used for loaders
  xhr.onprogress = function(){
    
  }

  //USING ONLOAD FUNCTION
  xhr.onload = function (){
    console.log("READYSTATE ", this.readyState);
    if(this.status === 200){
      // console.log(this.responseText);
    }
  }

  //USING OnReadyStateChange FUNCTION
  // xhr.onreadystatechange = function(){
  //   console.log("READYSTATE ", this.readyState);
  //   if(this.readyState == 4 && this.status == 200){
  //     // console.log(this.responseText);
  //   }
  // }

  //Sends request
  xhr.send();
}

//Ready state values
//0: "Request not initialized"
//1: "server connection established"
//2: "request received"
//3: "processing request"
//4: "request finished and response is ready"

//HTTP Status
//200: "OK"
//403: "Forbidden"
//404: "Not Found"

