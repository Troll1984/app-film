const image1 = document.querySelector('#image-1');
const slider = document.querySelector('.wrap-slide');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

const originalSlides = 3;
const transitionTime = 500;
const intervalTime = 3000;

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
let isAnimating = false;

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
      if (isAnimating) return;

    isAnimating = true;
    index++;

    updateSlider(true);

  setTimeout(() => {
    if (index === originalSlides * 2) { 
        index = originalSlides; 
        updateSlider(false);
    }
    isAnimating = false;
  }, transitionTime)
}

 function rightSlide() {
        if (isAnimating) return; 
        isAnimating = true;
    index--;

    updateSlider(true);

    setTimeout(() => {
        if (index === originalSlides - 1) {
             index = originalSlides * 2 - 1;
             updateSlider(false);
             }
             isAnimating = false;
    },transitionTime);
   
}
timer = setInterval(nextSlide, intervalTime);

left.addEventListener('click', () => {
    nextSlide();
});
right.addEventListener('click', () => {   
    rightSlide()
});
updateSlider(false);

window.addEventListener('resize', () => {
    updateSlider(false);
});