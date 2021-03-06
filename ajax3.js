//select elements from html document
const button = document.querySelector('#button');
const displayUsers = document.querySelector('#users');

//addEventListener to button variable
button.addEventListener('click', renderUsers);

//write renderUsers function
function renderUsers(){
  const httpRequest = new XMLHttpRequest();
  httpRequest.open ('GET', 'https://api.github.com/users', true);
  //create onload function
  httpRequest.onload = function (){
    if(this.status === 200){
      var users = JSON.parse(this.responseText);
      
      var output = '';
      for(var i in users){
        output +=
        '<div class="user"' +
        '<img src="'+users[i].avatar_url+'" width="70" height="70">' +
        '<ul>' +
        '<li>ID: '+users[i].id+'</li>' +
        '<li>Login: '+users[i].login+'</li>' +
        '</ul>' +
        '</div>';
      }
      displayUsers.innerHTML = output;
    }
  }
  httpRequest.send();
}