window.addEventListener('scroll', function() {
    const header = document.getElementById('menu');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Muda a cor após 50px de rolagem
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
