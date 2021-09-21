let btnMenu = document.getElementById('btnMenu');
let menu = document.getElementById('menu');

let openMenu = false;

function changeMenu(){
   // const container = document.getElementById('container')
    menu.classList.toggle('active')
    
    openMenu = !openMenu

    if (openMenu ) menu.style.display = 'flex';
    else menu.style.display = 'none';
} 

btnMenu.addEventListener('click', changeMenu);