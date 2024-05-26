const loginButton = document.getElementById('login');
const loginContainer = document.querySelector('.login-container');

loginButton.addEventListener('click', function() {
  loginContainer.classList.add('show');
});

function ocultarBarraNavegacao() {
  var element = document.documentElement;
  if (element.requestFullscreen) {
      element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
  }
}

window.addEventListener('load', ocultarBarraNavegacao);
