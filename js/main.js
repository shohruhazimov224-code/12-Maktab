// ===== 1. Burger menu =====
function setupBurgerMenu(burgerSelector, menuSelector, openClass) {
    const burger = document.querySelector(burgerSelector);
    const menu = document.querySelector(menuSelector);

    if (!burger || !menu) return;

    burger.addEventListener('click', () => {
        const isOpen = menu.classList.toggle(openClass);
        burger.setAttribute('aria-expanded', isOpen);
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


// ===== 2. Fade-up when scrolling =====
const revealItems = document.querySelectorAll(
    '.name__date__text, .name__title, .name__links__holder, .our__heading, .our__item, .cert__heading, .cert__item, .card__heading, .card__title, .card__item'
);

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal--visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach((item) => {
        const index = Array.from(item.parentElement.children).indexOf(item);
        item.style.transitionDelay = (index * 0.12) + 's';
        item.classList.add('reveal');
        observer.observe(item);
    });
}


// ===== 3. Click a certificate photo to see it large =====
document.querySelectorAll('.card__item img').forEach((img) => {
    img.addEventListener('click', () => {
        const box = document.createElement('div');
        box.className = 'lightbox';
        box.innerHTML = '<img src="' + img.src + '" alt="' + img.alt + '">';

        const close = () => {
            box.remove();
            document.removeEventListener('keydown', onKey);
        };
        const onKey = (e) => { if (e.key === 'Escape') close(); };

        box.addEventListener('click', close);
        document.addEventListener('keydown', onKey);
        document.body.appendChild(box);
    });
});
