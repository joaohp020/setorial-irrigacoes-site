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

window.addEventListener('scroll', function() {
    const header = document.getElementById('menu');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Muda a cor após 50px de rolagem
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
