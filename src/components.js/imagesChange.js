let image = document.querySelector('#image');

let movies = [];
let index = 0;

fetch('https://api.tvmaze.com/shows')
    .then(response => response.json())
    .then(data => {

        movies = data.filter(movie => movie.image);

        image.src = movies[index].image.original;

        setInterval(function() {

            image.style.opacity = '0';

            setTimeout(function() {

                index++;

                if (index === movies.length) {
                    index = 0;
                }

                image.src = movies[index].image.original;
                 setTimeout(function() {
                    image.style.opacity = '1';
                }, 50);

                

            }, 1000);

        }, 8000);
    });