const image1 = document.querySelector('#image-1');
const slider = document.querySelector('.wrap-slide');

const originalSlides = 3;
const transitionTime = 500;
const intervalTime = 1000;

// Берём первые три оригинальные картинки
const originals = Array.from(image1.children).slice(0, originalSlides);

// Удаляем старые копии, если они есть
image1.replaceChildren(...originals);

// Создаём копии до и после оригиналов
const before = originals.map(img => img.cloneNode(true));
const after = originals.map(img => img.cloneNode(true));

// Итог: копии → оригиналы → копии
image1.prepend(...before);
image1.append(...after);

const slides = Array.from(image1.children);

// Начинаем с первой оригинальной картинки
let index = originalSlides;
let timer;

function updateSlider(animate = true) {
    const slide = slides[index];

    const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
    const sliderCenter = slider.clientWidth / 2;
    const move = slideCenter - sliderCenter;

    image1.style.transition = animate
        ? `transform ${transitionTime}ms ease`
        : 'none';

    image1.style.transform = `translateX(-${move}px)`;
}

function nextSlide() {
    index++;

    updateSlider(true);

    // Дошли до первой копии после оригиналов
    if (index === originalSlides * 2) {
        setTimeout(() => {
            index = originalSlides;
            updateSlider(false);
        }, transitionTime);
    }
}

updateSlider(false);

timer = setInterval(nextSlide, intervalTime);

window.addEventListener('resize', () => {
    updateSlider(false);
});