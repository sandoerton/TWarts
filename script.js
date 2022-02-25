
let email = document.querySelector('#email');
let senha = document.querySelector('#password');
let botaoLogin = document.querySelector('#btn-login');

function validaLogin() {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
}

botaoLogin.addEventListener('click',validaLogin);