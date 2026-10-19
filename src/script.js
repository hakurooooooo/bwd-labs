/* ====== БУРГЕР-МЕНЮ + ОВЕРЛЕЙ ====== */
const burger = document.getElementById('burger');
const nav = document.getElementById('siteNav');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
    overlay.classList.toggle('is-open');
}

if (burger && nav && overlay) {
    burger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Закрытие по клику на ссылку в меню
    nav.querySelectorAll('.site-nav__link').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('is-open')) toggleMenu();
        });
    });
}

/* ====== ДИАЛОГ ====== */
const dialog = document.getElementById('addDialog');
const openBtn = document.getElementById('openDialog');
const closeBtn = document.getElementById('closeDialog');

if (dialog && openBtn) {
    openBtn.addEventListener('click', () => {
        dialog.showModal();
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => dialog.close());
    }

    // Клик вне окна — закрыть
    dialog.addEventListener('click', (e) => {
        const rect = dialog.getBoundingClientRect();
        const inDialog =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;
        if (!inDialog) dialog.close();
    });
}