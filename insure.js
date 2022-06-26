const open = document.querySelector('.open');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');


open.addEventListener('click',function(){
    open.style.display = 'none'
    close.style.display = 'block'
    nav.classList.add('show-nav');

})
close.addEventListener('click',function(){
    close.style.display = 'none'
    open.style.display = 'block'
    nav.classList.remove('show-nav');
})
