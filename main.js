var carousel = document.querySelector('.carousel');
var carouselItems = document.querySelectorAll('.carousel-item');
var currentIndex = 0;

function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

const ativaMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('.navegation .searching')

ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})