const image1 = document.querySelector('#image-1');
const slider = document.querySelector('.wrap-slide');
const slides = Array.from(image1.children);

let index = 0;
const originalSlides = 3;
let timer;

function updateSlider(animate = true) {
    const slide = slides[index];

    // Центр активной картинки
    const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;

    // Центр видимой области
    const sliderCenter = slider.clientWidth / 2;

    // Смещение для центрирования
    const move = slideCenter - sliderCenter;

    image1.style.transition = animate ? 'transform 0.5s ease' : 'none';
    image1.style.transform = `translateX(-${move}px)`;

    
}

function nextSlide() {
    index++;

    if (index >= originalSlides) {
        // Переходим на копию первой картинки
        updateSlider(true);

        setTimeout(() => {
            index = 0;
            updateSlider(false);
        }, 500);

        return;
    }

    updateSlider(true);
}

updateSlider(false);

timer = setInterval(nextSlide, 3000);

// Пересчитываем позицию при изменении ширины окна
window.addEventListener('resize', () => {
    updateSlider(false);
});