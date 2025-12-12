let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slides .slide');
const totalSlides = slides.length;
const carouselSlides = document.querySelector('.carousel-slides');
const slideWidth = slides[0].offsetWidth;

// Intervalo para a rotação automática
let autoSlideInterval;

// Função para mostrar os slides
function showSlides() {
    if (currentSlide >= totalSlides - 1) {
        carouselSlides.style.transition = "none"; // Remove a transição
        carouselSlides.style.transform = `translateX(0)`; // Retorna ao início
        currentSlide = 0;
        setTimeout(() => {
            carouselSlides.style.transition = "transform 0.5s ease";
            nextSlide(); // Avança para o próximo slide
        }, 50); // Pequeno atraso para garantir a transição suave
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
        currentSlide = totalSlides - 2; // Vai para o penúltimo slide real
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

// Função para reiniciar o intervalo de rotação automática
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Para o intervalo atual
    autoSlideInterval = setInterval(nextSlide, 8000); // Reinicia o intervalo
}

// Configura os botões para avançar e retroceder
document.getElementById('nextBtn').addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});
document.getElementById('prevBtn').addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

// Inicia a rotação automática
autoSlideInterval = setInterval(nextSlide, 8000);

// Chama showSlides na carga da janela
window.onload = showSlides;