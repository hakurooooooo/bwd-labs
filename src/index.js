import './style.css';
import logo from './logo.svg';
import hero from './hero.svg';
import error404 from './error-404.svg';
import './favicon.svg';

import { addTask } from './store.js';
import { render } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const logoImg = document.querySelector('.site-header__logo-img');
    if (logoImg) logoImg.src = logo;
    const heroImg = document.querySelector('.hero__image img');
    if (heroImg) heroImg.src = hero;
    const errorImg = document.querySelector('.error-page__image');
    if (errorImg) errorImg.src = error404;

    render();

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', render);
    }

    const burger = document.getElementById('burger');
    const nav = document.getElementById('siteNav');
    const overlay = document.getElementById('overlay');
    if (burger && nav && overlay) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('is-open');
            nav.classList.toggle('is-open');
            overlay.classList.toggle('is-open');
        });
        overlay.addEventListener('click', () => {
            burger.classList.remove('is-open');
            nav.classList.remove('is-open');
            overlay.classList.remove('is-open');
        });
    }

    const dialog = document.getElementById('addDialog');
    const openBtn = document.getElementById('openDialog');
    const closeBtn = document.getElementById('closeDialog');
    const form = dialog ? dialog.querySelector('.dialog__form') : null;
    const input = dialog ? dialog.querySelector('.dialog__input') : null;

    if (dialog && openBtn) {
        openBtn.addEventListener('click', () => dialog.showModal());
        if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                if (input.value.trim() !== '') {
                    addTask(input.value.trim());
                    render();
                    input.value = '';
                    dialog.close();
                }
            });
        }
        dialog.addEventListener('click', (e) => {
            const rect = dialog.getBoundingClientRect();
            const inDialog = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
            if (!inDialog) dialog.close();
        });
    }
});