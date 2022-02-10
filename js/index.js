/*
Student: Talha Farid - M00795345
Description: index.js (script for the main index page containing all the variables and functions for registration and signing in)
*/

var regForm = document.getElementById('register');
var logForm = document.getElementById('login');
var vidCont = document.getElementById('vid');
var signOut = document.getElementById('log-out');
var user = document.getElementById("name-of-the-current-user");
var userName = sessionStorage.getItem("signed_in_user");
hidenseek ();

// function for hiding the game page when logged out and hiding the registration and signing in form when logged in.
function hidenseek () {
  var userName1 = sessionStorage.getItem("signed_in_user");
if (userName1 != undefined) {
  user.innerText = "Hello, " + userName1;
  document.getElementById("register").setAttribute("style", "visibility: hidden;");
  document.getElementById("login").setAttribute("style", "visibility: hidden;");
  document.getElementById("gamePHP").setAttribute("style", "visibility: visible;");
}
else {
  document.getElementById("register").setAttribute("style", "visibility: visible;");
  document.getElementById("login").setAttribute("style", "visibility: visible;");
  document.getElementById("gamePHP").setAttribute("style", "visibility: hidden;");
}
}

// Password confirm validation function
function COnfirm(){
  let p1=document.getElementById("passwrd").value;
  let p2=document.getElementById("passwrd2").value;
  if(p1!=p2){
    alert("passwords do not match");
    return false;
  }
  else { 
    return true;
  }
}

// Event Listener for button
document.addEventListener('click', (ev) => {
	if (ev.target.classList.contains('btn-reg')) {
		ev.preventDefault();

		regForm.classList.add('regMove');
		logForm.classList.add('logMove');
		vidCont.classList.add('vidMove');
	}

	if (ev.target.classList.contains('btn-log')) {
		ev.preventDefault();

		regForm.classList.remove('regMove');
		logForm.classList.remove('logMove');
		vidCont.classList.remove('vidMove');
	}
});

// register function

function registER () {
  if(COnfirm()){

  // client object
  let client = {
    usrName: document.getElementById("register").usrName.value,
    email: document.getElementById("register").email.value,
    pNumber: document.getElementById("register").pNumber.value,
    address: document.getElementById("register").address.value,
    fName: document.getElementById("register").fName.value,
    passwrd: document.getElementById("register").passwrd.value,
    maxscore: 0
  }

  // checks for existing username
  let checkusr = JSON.parse(localStorage.getItem(client.usrName));
  if (checkusr != undefined) {
    alert("User already exists!.\n\nPlease Sign In to play the game.");
  }
  else {
    localStorage.setItem(client.usrName,JSON.stringify(client));
    alert("Your Account Has Been Created!.\n\nPlease Sign In to play the game.");
  }
}

}

// function for the signout button in the navbar

function signOutButton() {
  if (sessionStorage.signed_in_user != undefined) {
    signOut.innerHTML = '<a id="signOut-usr" href="index.php">Logout</a>'; 
  
    var currentUser = document.getElementById("signOut-usr");
    currentUser.addEventListener("click", function() {
      sessionStorage.removeItem("signed_in_user");
    });
  }
}
signOutButton(); 


  
// SignIn funcion

function signIn () {
  let name1 = document.getElementById("login").usrName1.value;
  let usr = JSON.parse(localStorage.getItem(name1));
  if (usr != undefined) {
    let pass1 = document.getElementById("login").passwrd1.value;
    if (pass1 === usr.passwrd) {
      sessionStorage.setItem("signed_in_user",name1);  
      alert("logged in");

    }
    else {
      alert("Password is not correct!");
    }
  }

  else {
    alert("Username doesn't exist! Please register");
  }
	
}
