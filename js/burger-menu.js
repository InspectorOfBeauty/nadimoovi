const burgerMenuBtn = document.querySelector(".menu");
const menuItems = document.querySelector(".header__menu");
const freeSpace = document.querySelector(".freeSpace");
let menuLinks = document.querySelectorAll('.menu__link');

function hideMenuItems() {
    menuItems.classList.remove('burger-menu_active');
    freeSpace.classList.remove('freeSpace_active');
    freeSpace.removeEventListener('click', hideMenuItems);
}

burgerMenuBtn.onclick = function () {
    menuItems.classList.add('burger-menu_active');
    freeSpace.classList.add('freeSpace_active');

    freeSpace.addEventListener('click', hideMenuItems);
}

for(let index = 0; index < menuLinks.length; index++) {
    menuLinks[index].addEventListener('click', hideMenuItems);
}


