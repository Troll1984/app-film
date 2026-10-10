let menu = document.querySelector('.menu');
let movieSidebar = document.querySelector('.movie-sidebar');
let search = document.querySelector('#search');
let lupa = document.querySelector('#lupa');
let close = document.querySelector('.close');

menu.addEventListener('click', function(event) {
    event.stopPropagation();
    movieSidebar.classList.add('active-sidebar-menu');
});
close.addEventListener('click', function(event) {
    event.stopPropagation();
    movieSidebar.classList.remove('active-sidebar-menu');
});


action.addEventListener('click', function() {
    movieSidebar.classList.remove('active-sidebar-menu');
});
comedy.addEventListener('click', function() {
    movieSidebar.classList.remove('active-sidebar-menu');
});
horror.addEventListener('click', function() {
    movieSidebar.classList.remove('active-sidebar-menu');
});
thriller.addEventListener('click', function() {
    movieSidebar.classList.remove('active-sidebar-menu');
});

window.addEventListener('load', () => {
    movieSidebar.classList.add('loaded');
});

lupa.addEventListener('click', function() {
    search.classList.toggle('inp');
});
