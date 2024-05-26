const loginButton = document.getElementById('login');
const loginContainer = document.querySelector('.login-container');

loginButton.addEventListener('click', function() {
  loginContainer.classList.add('show');
});