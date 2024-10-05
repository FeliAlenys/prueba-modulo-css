let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    if (index >= carouselItems.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = carouselItems.length - 1;
    } else {
        currentIndex = index;
    }
    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${newTransformValue}%)`;
}

function moveCarousel(direction) {
    showSlide(currentIndex + direction);
}

// Auto-play cada 5 segundos
setInterval(() => {
    moveCarousel(1);
}, 5000);
