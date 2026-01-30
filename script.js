const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('header > ul');
const dropdown = document.querySelector('.dropdown');

// 1. Toggle Mobile Menu (Slider and Hamburger Animation)
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('open'); 
});

// 2. Toggle CV Dropdown on Mobile/Tablet tap
dropdown.addEventListener('click', (e) => {
    if (window.innerWidth <= 992) { 
        if (e.target.getAttribute('href') === '#') {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    }
});

document.querySelectorAll('header ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Don't close if clicking the "View CVs" parent link
        if (!link.parentElement.classList.contains('dropdown')) {
            nav.classList.remove('active');
            menuBtn.classList.remove('open');
        }
    });
});