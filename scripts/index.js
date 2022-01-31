let iconMenu = document.getElementById('iconMenu');
let menuMobile = document.getElementById('menuMobile');

let langMenu = document.getElementById('langMenu');
let menuDrop = document.getElementById('drop');

let buttoOpenModal = document.getElementById('action');
let buttonCloseModal = document.getElementById('closeDialog');
let dialogs = document.getElementById('dialogs');

var isMenu = false;
var isMenuLang = false;

iconMenu.addEventListener('click', function () {
    isMenu = !isMenu;
    console.log(isMenu);
    if (isMenu) {
        menuMobile.style.display = 'block';
    } else {
        menuMobile.style.display = 'none';
    }
});

langMenu.addEventListener('click', function () {
    isMenuLang = !isMenuLang;
    if (isMenuLang) {
        menuDrop.style.display = 'block';
    } else {
        menuDrop.style.display = 'none';
    }
});


buttoOpenModal.addEventListener('click', function () {
    dialogs.classList.add("open");
});


buttonCloseModal.addEventListener('click', function () {
    dialogs.classList.remove("open");
});




