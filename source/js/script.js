let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let headerLogo = document.querySelector('.main-header__logo');
let mapContainer = document.querySelector('.map__container');
let mapPicture = document.querySelector('.map__picture');


navMain.classList.remove('main-nav--nojs');
headerLogo.classList.remove('main-nav--nojs');
mapContainer .classList.remove('map__container--nojs');
mapPicture .classList.remove('map__picture--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
