let search = document.querySelector('#search');
let btn = document.querySelector('#btn');
let movies = document.querySelector('#movies');
let serial = document.querySelector('#serial');
let listOpen = document.querySelector('#list-open');
let action = document.querySelector('#action');
let comedy = document.querySelector('#comedy');
let horror = document.querySelector('#horror');
let thriller = document.querySelector('#thriller');
let arrow = document.querySelector('#arrow');
let main = document.querySelector('#main');
let image = document.querySelector('#image');
let blockImage = document.querySelector('.block-image');
let img = document.querySelector('#img');


let isHover = false;

btn.addEventListener('mouseenter', function() {
    isHover = true;
})
btn.addEventListener('mouseleave', function() {
    isHover = false;
})

setInterval(function() {
    if(isHover){
        return;
    }
    btn.classList.add('tram');
    setTimeout(function() {
        btn.classList.remove('tram');
    },1500)
}, 5000);


function filterByGenres(genre) {
     let url = `https://api.tvmaze.com/shows`;
    fetch(url)
    .then(response => response.json())
    .then(data => {     
        movies.innerHTML = '';
      for(let item of data){         
        if (item.image && item.genres.includes(genre)) {
            movies.innerHTML += 
            `<div class="movie">
                <h3>${item.name}</h3>
                 <p>${item.genres}</p>                 
                <img src="${item.image.medium}">
                <span>Рейтинг: ${item.rating.average}</span>
            </div>`;
            }
        }
    });
}

arrow.addEventListener('click', function() {
    listOpen.classList.toggle('active');
    arrow.classList.toggle('active');
});

action.addEventListener('click', function(event) {
     event.stopPropagation();
     image.style.display = 'none';
     blockImage.classList.add('block-open');
      
     filterByGenres('Action');    
});

comedy.addEventListener('click', function(event) {
     event.stopPropagation();
      image.style.display = 'none';
   filterByGenres('Comedy');
});

horror.addEventListener('click', function(event) {
     event.stopPropagation();
      image.style.display = 'none';
    filterByGenres('Horror');
});

thriller.addEventListener('click', function(event) {
     event.stopPropagation();
      image.style.display = 'none';
   filterByGenres('Thriller');
});


btn.addEventListener('click', function() {
     image.style.display = 'none'; 
    let movie = search.value;
    let url = `https://api.tvmaze.com/search/shows?q=${movie}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {     
        movies.innerHTML = '';
      for(let item of data){
          console.log(item.show.genres);
        if (item.show.image) {
            movies.innerHTML += 
            `<div class="movie">
                <h3>${item.show.name}</h3>
                <p>${item.show.genres}</p>
                <img src="${item.show.image.medium}">
            </div>`;
            }
        }
    });
});
main.addEventListener('click', function() {
    location.reload();
});


