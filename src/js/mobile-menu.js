document.addEventListener('DOMContentLoaded', () => {
    btn.addEventListener('click', () => {
        mobileMenu.classList.add('visible');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('visible');
    });

    const smoothScrollLinks = document.querySelectorAll('.mobile-menu__link');

    for (let link of smoothScrollLinks) {
        link.addEventListener('click', event => {
            event.preventDefault();
            mobileMenu.classList.remove('visible');
        })
        };

});


