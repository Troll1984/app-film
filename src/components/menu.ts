import { getElement } from './dom';
const menu = getElement('.menu');
const movieSidebar = getElement('.movie-sidebar');
const search = getElement('#search');
const lupa = getElement('#lupa');
const close = getElement('.close');
const action = getElement('#action');
const comedy = getElement('#comedy');
const horror = getElement('#horror');
const thriller = getElement('#thriller');

menu.addEventListener('click', function(event: MouseEvent): void {
    event.stopPropagation();
    movieSidebar.classList.add('active-sidebar-menu');
});
close.addEventListener('click', function(event: MouseEvent): void {
    event.stopPropagation();
    movieSidebar.classList.remove('active-sidebar-menu');
});


action.addEventListener('click', function(): void {
    movieSidebar.classList.remove('active-sidebar-menu');
});
comedy.addEventListener('click', function(): void {
    movieSidebar.classList.remove('active-sidebar-menu');
});
horror.addEventListener('click', function(): void {
    movieSidebar.classList.remove('active-sidebar-menu');
});
thriller.addEventListener('click', function(): void {
    movieSidebar.classList.remove('active-sidebar-menu');
});

window.addEventListener('load', (): void => {
    movieSidebar.classList.add('loaded');
});

lupa.addEventListener('click', function(): void {
    search.classList.toggle('inp');
});
