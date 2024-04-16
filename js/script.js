const buttonMenuElement = document.getElementById('button-menu');
const menuElement = document.getElementById('menu');

function handleMenu() {
if (menuElement.classList.contains('show')) {
    menuElement.classList.remove('show')
}
else {
    menuElement.classList.add('show');
}
}

buttonMenuElement.addEventListener('click', handleMenu);