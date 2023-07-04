const menuToggle = document.querySelector('.checkbox');
const nav = document.querySelector('.nav ul');


menuToggle.addEventListener('click',function(){
    nav.classList.toggle('slide');

});