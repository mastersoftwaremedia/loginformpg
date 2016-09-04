function checkUsername(minLength) { 
	if (elUsername.value.length < minLength) {   
		elMsg1.className='warning';
		elMsg1.textContent = 'It is not long enough..., yet'; 
	} else {                                             
		elMsg1.className = '';     
		elMsg1.textContent='';
	}
}
function tipUsername() {
	elMsg1.className='tip';
	elMsg1.innerHTML='Username must be at least 6 characters or more'; 
}
function tipPassword(){
	elMsg2.className='tip';
	elMsg2.innerHTML='Password must be at least 8 characters long or more'; 
}
function checkPassword(minLength){
	if(elPassword.value==='' || (!/[0-9.]+/.test(elPassword.value) &&!/[abc]/.test(elPassword.value))){
		elMsg2.className='warning';
		elMsg2.textContent='Password must contain at least one numeric value';

	}else{
		elMsg2.className = ''; 
		elMsg2.textContent='';
	}
}	
var elUsername = document.getElementById('username');
var elPassword = document.getElementById('password');
var elMsg1 = document.getElementById('feedback1');  
var elMsg2 = document.getElementById('feedback2');   
elUsername.addEventListener('focus', tipUsername, false);
elUsername.addEventListener('blur', function(){checkUsername(6);}, false);
elPassword.addEventListener('focus', tipPassword, false);
elPassword.addEventListener('blur', function(){checkPassword(8);}, false);
