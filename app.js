const btn = document.querySelector('#btn');
const menu = document.querySelector('.menu');
const list = document.querySelector('.list');

// Display Mobile Menu
const mobileMenu = () => {
    // btn.classList.toggle('active');
    menu.classList.toggle('active');
};
btn.addEventListener('click', mobileMenu);

// Hide Mobile Menu
const hideMobileMenu = () => {
    // btn.classList.toggle('active');
    menu.classList.remove('active');
};
list.addEventListener('click', hideMobileMenu);