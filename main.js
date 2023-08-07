const menu = document.querySelector('.header__shop');
const burgerBtn = document.querySelector('.header__menu-btn');
const closeBtn = document.querySelector('.header__menu-close-btn');

burgerBtn.addEventListener('click', () => {
    if(menu && burgerBtn) {
        menu.classList.add('active');
    }
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
})