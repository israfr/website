const toggle = document.querySelector('.toggle_btn');
const menu = document.querySelector('.menu_container');
const list = document.querySelector('.list');

// Display Mobile Menu
const showMobileMenu = () => {
    // btn.classList.toggle('active');
    menu.classList.toggle('active');
};
toggle.addEventListener('click', showMobileMenu);

// Hide Mobile Menu When Klik Link Menu
const hideMobileMenu = () => {
    menu.classList.remove('active');
};
list.addEventListener('click', hideMobileMenu);