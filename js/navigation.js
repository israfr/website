// Switch Mode Dark/Light
var btnLight = document.querySelector('.light__mode');
var btnDark = document.querySelector('.dark__mode');
var main = document.querySelector('main');

var modeDark = () => {
    main.classList.add('dark');
    btnDark.classList.add('active');
    main.classList.remove('light');
    btnLight.classList.remove('active');
};

btnDark.addEventListener('click', modeDark);

var modeLight = () => {
    main.classList.add('light');
    btnLight.classList.add('active');
    main.classList.remove('dark');
    btnDark.classList.remove('active');
};

btnLight.addEventListener('click', modeLight);
// End Switch Mode Dark/Light

// Toggle Menu
var toggle = document.querySelector('.toggle__button');
var navbar = document.querySelector('.navbar');

var openMenu = () => {
    navbar.classList.toggle('active');
};

toggle.addEventListener('click', openMenu);
// End Toggle Menu


