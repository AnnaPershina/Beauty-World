window.onload = () => {
    const header = document.querySelector('header');

    document.addEventListener('scroll', event => {
        console.log(event.target.scrollTop)
    });

    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

    for (let link of smoothScrollLinks) {
        link.addEventListener('click', event => {
            event.preventDefault();

            const target = event.target;
            const elementToScroll = document.querySelector(target.getAttribute('href'));
            elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'end'});
        });
    }
};
