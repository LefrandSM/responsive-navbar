const check = document.querySelector('.button-toggle input');
const nav = document.querySelector('nav ul');

check.addEventListener('click', function(){
    nav.classList.toggle('slide');
});