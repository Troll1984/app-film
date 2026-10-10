let search = document.querySelector('#search');
let btn = document.querySelector('#btn');
let movies = document.querySelector('#movies');
let serial = document.querySelector('.serial');
let listOpen = document.querySelector('#list-open');
let action = document.querySelector('#action');
let comedy = document.querySelector('#comedy');
let horror = document.querySelector('#horror');
let thriller = document.querySelector('#thriller');
let arrow = document.querySelector('#arrow');
let main = document.querySelector('#main');
let logo = document.querySelector('.logo');
let blockTitle = document.querySelector('.block-title');
let image1 = document.querySelector('#image-1');
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
                <img src="${item.image.medium}">
                <span>Рейтинг: ${item.rating.average}</span>
            </div>`;
            }
        }
    });
}

serial.addEventListener('click', function() {
    listOpen.classList.toggle('active');
    arrow.classList.toggle('active');
});

action.addEventListener('click', function(event) {
     event.stopPropagation();    
   
           
     filterByGenres('Action');    
});
comedy.addEventListener('click', function(event) {
     event.stopPropagation();    
    
   filterByGenres('Comedy');
});
horror.addEventListener('click', function(event) {
     event.stopPropagation();   
      
    filterByGenres('Horror');
});
thriller.addEventListener('click', function(event) {
     event.stopPropagation();   
   
   filterByGenres('Thriller');
});

btn.addEventListener('click', function() {   
    image1.style.display = 'none';    
    let movie = search.value;
    let url = `https://api.tvmaze.com/search/shows?q=${movie}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {     
        movies.innerHTML = '';
      for(let item of data){          
        if (item.show.image) {
            movies.innerHTML += 
            `<div class="movie">
                <h3>${item.show.name} </h3>                
                <img src="${item.show.image.medium}">
            </div>`;
            }
        }
    });
});
main.addEventListener('click', function() {
    location.reload();
});
logo.addEventListener('click', function() {
    location.reload();
});
filterByGenres('Action');


