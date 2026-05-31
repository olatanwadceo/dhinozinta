const hamburger = document.querySelector('.hamburger'); 
const navLeft = document.querySelector('.nav-left');

hamburger.addEventListener('click', function(){
	navLeft.classList.toggle('show-mobile');
});

const form = document.getElementById('signup');
const error = document.getElementById('error');

function showError(msg, inputE1){
error.textContent = msg;
error.style.display = 'block';

if(inputE1 && inputE1.style){
	inputE1.style.border = '1px solid #e63946';
	inputE1.focus();
}
} 

function clearErrors(){
error.style.display = 'none';
form.querySelectorAll('input').forEach(i => i.style.border = '1px solid #ccc');
}

document.querySelector('form')
form.addEventListener('submit', function(e){
e.preventDefault();
clearErrors();

const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const confirm_passwordEl = document.getElementById('confirm_password');

const name = nameEl.value.trim();
const email = emailEl.value.trim();
const password = passwordEl.value.trim();
const confirm_password = confirm_passwordEl.value.trim();


if (name === '' || email === '' || password === ''){
	
	return showError('All fields  required' );
}
if (!email.includes('@')){
	
	return showError('Enter a valid email', emailEl);
}
if(password.length <8){
	return showError('password must be at least 8 character', passwordEl);
}
if(password !== confirm_password){
	return showError('password does not match', confirm_password)
}
	
form.submit();

});
document.querySelector('#delete_btn').addEventListener('click', function(){
	form.reset();
	clearErrors();
});