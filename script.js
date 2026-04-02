const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

if (toggle) {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

// fechar menu ao clicar
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.classList.remove('active');
    });
});

// animação scroll
const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

fades.forEach(el => observer.observe(el));

// loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');

    if (loader) {
        setTimeout(() => {
            loader.classList.add('hide');
        }, 2000);
    }
});