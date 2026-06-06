console.log("JavaScript carregado!");
const slides = document.querySelector('.slides');
const imagens = document.querySelectorAll('.slides img');

let index = 0;

function mostrarSlide() {
    const largura = document.querySelector('.carrossel').clientWidth;
    slides.style.transform = `translateX(-${index * largura}px)`;
}

function proximoSlide() {
    index = (index + 1) % imagens.length;
    mostrarSlide();
}

function slideAnterior() {
    index = (index - 1 + imagens.length) % imagens.length;
    mostrarSlide();
}

setInterval(proximoSlide, 3000);