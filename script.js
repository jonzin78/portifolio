const menu = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // ← 追加
});

// fechar menu ao clicar
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.classList.remove('active');
        document.body.classList.remove('no-scroll');
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

    const isFirstVisit = !sessionStorage.getItem('visited');

    if (isFirstVisit) {
        // 初回（このタブで）
        sessionStorage.setItem('visited', 'true');

        setTimeout(() => {
            loader.classList.add('hide');
        }, 3000);

    } else {
        // リロード時
        loader.style.display = 'none';
    }
});

//スクロール bar

const workList = document.querySelector(".work-list");
const bar = document.querySelector(".scroll-bar-inner");

workList.addEventListener("scroll", () => {
    const scrollLeft = workList.scrollLeft;
    const maxScroll = workList.scrollWidth - workList.clientWidth;

    const scrollPercent = scrollLeft / maxScroll;

    bar.style.width = scrollPercent * 100 + "%";
});