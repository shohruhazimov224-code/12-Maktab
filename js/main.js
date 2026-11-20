// const burger = document.querySelector('.header__burger');
// const menu = document.querySelector('.header__right');

// if (burger && menu) {
//     burger.addEventListener('click', () => {
//         const isOpen = menu.classList.toggle('header__right--open');
//         burger.setAttribute('aria-expanded', isOpen);
//     });

//     // close the menu after a link is tapped
//     menu.addEventListener('click', (event) => {
//         if (event.target.closest('a')) {
//             menu.classList.remove('header__right--open');
//             burger.setAttribute('aria-expanded', 'false');
//         }
//     });
// }



function setupBurgerMenu(burgerSelector, menuSelector, openClass) {
    const burger = document.querySelector(burgerSelector);
    const menu = document.querySelector(menuSelector);

    if (!burger || !menu) return;

    burger.addEventListener('click', () => {
        const isOpen = menu.classList.toggle(openClass);
        burger.setAttribute('aria-expanded', isOpen);
        console.log('Toggled:', openClass, 'isOpen:', isOpen, 'classes:', menu.className);
    });

    menu.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            menu.classList.remove(openClass);
            burger.setAttribute('aria-expanded', 'false');
        }
    });
}

setupBurgerMenu('.header__burger', '.header__right', 'header__right--open');
setupBurgerMenu('.certificates__burger', '.certificates__right', 'certificates__right--open');


