//select elements from html document
const button = document.querySelector('#button');
const users = document.querySelector('#users');

//addEventListener to button variable
button.addEventListener('click', renderUsers);

//write renderUsers function
function renderUsers(){
  const htppRequest = new XMLHttpRequest();
  htppRequest.open ('GET', 'https://api.github.com/users', true);
  //create onload function
  htppRequest.onload = function (){
    if(this.status === 200){
      var users = JSON.parse(this.responseText);
      console.log(users);
    }
  }
}