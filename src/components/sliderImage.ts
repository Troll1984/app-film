import { getElement } from './dom';

const image1 = getElement('#image-1');
const slider = getElement('.wrap-slide');
const left = getElement('#left');
const right = getElement('#right');

const originalSlides: number = 3;
const transitionTime: number = 500;
const intervalTime: number = 3000;

// Берём первые три оригинальные картинки
const originals: HTMLElement[] = Array.from(image1.children).slice(0, originalSlides) as HTMLElement [];

// Удаляем старые копии, если они есть
image1.replaceChildren(...originals);

// Создаём копии до и после оригиналов
const before: HTMLElement[] = originals.map(img => img.cloneNode(true) as HTMLElement) ;
const after: HTMLElement[] = originals.map(img => img.cloneNode(true) as HTMLElement) ;

// Итог: копии → оригиналы → копии
image1.prepend(...before);
image1.append(...after);

const slides: HTMLElement[] = Array.from(image1.children) as HTMLElement[];

// Начинаем с первой оригинальной картинки
let index: number  = originalSlides;
let timer: ReturnType<typeof setInterval>;
let isAnimating: boolean = false;

function updateSlider(animate: boolean = true): void {
    const slide = slides[index];
    if(!slide) {
        return;
    }

    const slideCenter: number = slide.offsetLeft + slide.offsetWidth / 2;
    const sliderCenter: number = slider.clientWidth / 2;
    const move: number = slideCenter - sliderCenter;

    image1.style.transition = animate
        ? `transform ${transitionTime}ms ease`
        : 'none';

    image1.style.transform = `translateX(-${move}px)`;
}

function nextSlide(): void {
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

 function leftSlide(): void {
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

right.addEventListener('click', () => {
    nextSlide();
});
left.addEventListener('click', () => {   
    leftSlide()
});
updateSlider(false);

window.addEventListener('resize', () => {
    updateSlider(false);
});