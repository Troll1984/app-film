let menu = document.querySelector('.menu');
let movieSidebar = document.querySelector('.movie-sidebar');

menu.addEventListener('click', function() {
    movieSidebar.classList.toggle('active-sidebar-menu');
})