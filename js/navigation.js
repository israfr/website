// Open Menu
var toggle = document.querySelector('.toggle__button');
var navbar = document.querySelector('.navbar');

var openMenu = () => {
    navbar.classList.toggle('active');
};

toggle.addEventListener('click', openMenu);
// End Opne Menu



// Close Menu
var navLink = document.querySelector('.navbar__link');

var closeMenu = () => {
    navbar.classList.remove('active');
};

navLink.addEventListener('click', closeMenu);
// End Close Menu


