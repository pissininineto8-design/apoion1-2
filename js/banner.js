let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slides .slide');
const totalSlides = slides.length;
const carouselSlides = document.querySelector('.carousel-slides');
const slideWidth = slides[0].offsetWidth;

// Intervalo para a rota��o autom�tica
let autoSlideInterval;

// Fun��o para mostrar os slides
function showSlides() {
    if (currentSlide >= totalSlides - 1) {
        carouselSlides.style.transition = "none"; // Remove a transi��o
        carouselSlides.style.transform = `translateX(0)`; // Retorna ao in�cio
        currentSlide = 0;
        setTimeout(() => {
            carouselSlides.style.transition = "transform 0.5s ease";
            nextSlide(); // Avan�a para o pr�ximo slide
        }, 50); // Pequeno atraso para garantir a transi��o suave
    } else {
        carouselSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
}

function nextSlide() {
    currentSlide++;
    showSlides();
}

function prevSlide() {
    if (currentSlide <= 0) {
        carouselSlides.style.transition = "none";
        currentSlide = totalSlides - 2; // Vai para o pen�ltimo slide real
        carouselSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        setTimeout(() => {
            carouselSlides.style.transition = "transform 0.5s ease";
            prevSlide(); // Retrocede para o slide anterior
        }, 50);
    } else {
        currentSlide--;
        showSlides();
    }
}

// Fun��o para reiniciar o intervalo de rota��o autom�tica
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Para o intervalo atual
    autoSlideInterval = setInterval(nextSlide, 8000); // Reinicia o intervalo
}

// Configura os bot�es para avan�ar e retroceder
document.getElementById('nextBtn').addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});
document.getElementById('prevBtn').addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

// Inicia a rota��o autom�tica
autoSlideInterval = setInterval(nextSlide, 8000);

// Chama showSlides na carga da janela
window.onload = showSlides;