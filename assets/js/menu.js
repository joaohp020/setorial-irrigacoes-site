// Seleciona os botões de abrir e fechar
const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

// Evento para abrir o menu
menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
});

// Evento para fechar o menu
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-products");
    const productsList = document.getElementById("products-list");

    toggleButton.addEventListener("click", function () {
        if (productsList.classList.contains("hidden")) {
            productsList.classList.remove("hidden");
        } else {
            productsList.classList.add("hidden");
        }
    });
});



window.addEventListener('scroll', function () {
    const header = document.getElementById('menu');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Muda a cor após 50px de rolagem
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Abrir Dropdown Menu
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        const dropdownMenu = this.nextElementSibling;

        // dropdownMenu.classList.toggle('active');

        if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        }
    });
});
