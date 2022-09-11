const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu_container');
const list = document.querySelector('.list');

// Display Mobile Menu
const showMobileMenu = () => {
    // btn.classList.toggle('active');
    menu.classList.toggle('active');
};
toggle.addEventListener('click', showMobileMenu);

// Hide Mobile Menu
const hideMobileMenu = () => {
    // btn.classList.toggle('active');
    menu.classList.remove('active');
};
list.addEventListener('click', hideMobileMenu);