var username1= localStorage.getItem('Username')
console.log(username1);
head1.innerHTML =  `Welcome ${username1}`


//To remove the data from local storage - removeItem(key:string)

function logout() {
   window.location='./login.html'; 
   localStorage.clear()
}