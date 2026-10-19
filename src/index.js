import './style.css';
import './logo.svg';
import './favicon.svg';
import './hero.svg';
import './error-404.svg';

// Подставляем картинки после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    // Логотип в шапке
    const logoImg = document.querySelector('.site-header__logo-img');
    if (logoImg) {
        logoImg.src = require('./logo.svg');
    }

    // Картинка на главной
    const heroImg = document.querySelector('.hero__image img');
    if (heroImg) {
        heroImg.src = require('./hero.svg');
    }

    // Картинка на странице 404
    const errorImg = document.querySelector('.error-page__image');
    if (errorImg) {
        errorImg.src = require('./error-404.svg');
    }
});