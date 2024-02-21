let slideIndex = 0;
const slideWidth = document.querySelector('.slide').clientWidth;
const slider = document.querySelector('.slider');

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');

    if (direction === -1 && slideIndex > 0) {
        slideIndex--;
    } else if (direction === 1 && slideIndex < slides.length - 1) {
        slideIndex++;
    }

    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function autoScroll() {
    setInterval(() => {
        if (slideIndex < slider.children.length - 1) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }, 2000);
}

autoScroll(); // Запуск автоматической прокрутки при загрузке страницы
