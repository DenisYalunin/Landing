const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const slideWidth = slides.firstElementChild.offsetWidth;
let slideIndex = 0;

function moveSlide() {
    slideIndex++;

    // Перемещаем слайды
    const offset = -slideIndex * slideWidth;
    slider.querySelector('.slides').style.transition = 'transform 0.5s ease';
    slider.querySelector('.slides').style.transform = `translateX(${offset}px)`;

    // Если достигаем конца, возвращаемся к первому слайду без анимации
    if (slideIndex === slides.children.length - 1) {
        setTimeout(() => {
            slider.querySelector('.slides').style.transition = 'none';
            slideIndex = 0;
            slider.querySelector('.slides').style.transform = `translateX(0)`;
            setTimeout(() => {
                slider.querySelector('.slides').style.transition = '';
            }, 10);
        }, 500);
    }
}

// Запускаем вечный цикл прокрутки слайдов
setInterval(moveSlide, 2000);
