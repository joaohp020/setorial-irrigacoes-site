// Pega os elementos
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicators span');

// Variável para o slide atual
let currentIndex = 0;

// Função para alternar os slides
function showSlide(index) {
    // Remove a classe "active" de todos os slides e indicadores
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Adiciona a classe "active" ao slide e indicador atual
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

// Avança para o próximo slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Volta ao início após o último slide
    showSlide(currentIndex);
}

// Evento de clique nos indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// Troca automática de slides a cada 5 segundos
setInterval(nextSlide, 18000);


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".scroll-container");
    const logos = container.innerHTML;
    
    // Duplica o conteúdo
    container.innerHTML += logos;
  });
  
