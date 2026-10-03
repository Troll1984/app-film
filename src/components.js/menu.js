let menu = document.querySelector('.menu');
let movieSidebar = document.querySelector('.movie-sidebar');

menu.addEventListener('click', function(event) {
    event.stopPropagation();

    movieSidebar.classList.add('active-sidebar-menu');
});

action.addEventListener('click', function() {
    movieSidebar.classList.remove('active-sidebar-menu');
});

window.addEventListener('load', () => {
    movieSidebar.classList.add('loaded');
});