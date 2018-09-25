//select html elements
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

//addEventListener
button1.addEventListener('click', renderUser)
button2.addEventListener('click', renderUsers)

//USER1 HTTP OBJECT REQUEST
//creeate user function
function renderUser(){
  //create httpRequest Object
  const httpRequest = new XMLHttpRequest();
  //open httpRequest
  httpRequest.open('GET', 'user.json', true);
  //use onload function
  httpRequest.onload = function(){
    if(this.status === 200){
      const user = JSON.parse(this.responseText);
      let output = '';

      output += '<ol type="a"> '+
        '<li>ID: '+ user.id + '</li>'+
        '<li>Name: '+ user.name + '</li>'+
        '<li>Email '+ user.email + '</li>'+
        '</ol>';
      document.querySelector('#user').innerHTML = output;
    }
    else if(this.status === 404){
      document.querySelector('#user').innerHTML = 'Not found';
    }
  }
  httpRequest.send();
}

//USER2 HTTP REQUEST
//creeate renderusers function to serve users.json
function renderUsers(){
  //create httpRequest Object
  const httpRequest = new XMLHttpRequest();
  //open httpRequest
  httpRequest.open('GET', 'user.json', true);
  //use onload function
  httpRequest.onload = function(){
    if(this.status === 200){
      const users = JSON.parse(this.responseText);
      let output = '';

      for(var i in users){
        //loop through the users.json array
        output += '<ul type="square"> '+
        '<li>ID: '+ users[i].id + '</li>'+
        '<li>Name: '+ users[i].name + '</li>'+
        '<li>Email '+ users[i].email + '</li>'+
        '</ul>';
      }

      document.querySelector('#users').innerHTML = output;
    }
    else if(this.status === 404){
      document.querySelector('#users').innerHTML = 'Not found';
    }
  }
  httpRequest.send();
}