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

const botaoEnviar = document.querySelector('#submit-btn');
const botaoCheckBox = document.querySelector('#agreement');

window.onload = () => {
  botaoEnviar.disabled = true;
};

function habilitaBotao() {
  if (botaoCheckBox.checked === true) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}

botaoCheckBox.addEventListener('click', habilitaBotao);

const textArea = document.getElementById('textarea');

function contadorTextArea() {
  const contador = textArea.maxLength - textArea.textLength;
  const counter = document.getElementById('counter');
  counter.innerHTML = contador;
}

textArea.addEventListener('keyup', contadorTextArea);
