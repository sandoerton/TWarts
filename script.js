const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const botaoLogin = document.querySelector('#btn-login');

function validaLogin() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoLogin.addEventListener('click', validaLogin);


let botaoEnviar = document.querySelector('#submit-btn');
let botaoCheckBox = document.querySelector('#agreement');

window.onload = function () {
botaoEnviar.disabled = true;
}

function habilitaBotao () {

  if (botaoCheckBox.checked === true){
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }

}

botaoCheckBox.addEventListener('click', habilitaBotao);




