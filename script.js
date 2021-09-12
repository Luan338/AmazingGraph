let btnMenu = document.getElementById('btnMenu');


function changeMenu(){
    const container = document.getElementById('container')
    container.classList.toggle('active')

} 

btnMenu.addEventListener('click', changeMenu);