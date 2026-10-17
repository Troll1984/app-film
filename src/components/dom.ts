export function getElement(selector: string): HTMLElement {
    const element = document.querySelector<HTMLElement>(selector);

    if (!element) {
        throw new Error(`Элемент ${selector} не найден`);
    }

    return element;
}

export const  movies = getElement('#movies');