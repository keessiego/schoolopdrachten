const fadeElements = document.querySelectorAll('.fade');

function checkFade() {
    const windowHeight = window.innerHeight;
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 50) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);
