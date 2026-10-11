let serialFilms = document.querySelector('.serial-2');
let listOpenFilms = document.querySelector('#list-open-2');
let serialMult = document.querySelector('.serial-3');
let listOpenMult = document.querySelector('#list-open-3');
let serialSerial = document.querySelector('.serial-1');
let listOpenSerial = document.querySelector('#list-open-1');
let actionFilms = document.querySelector('#action-2');
let comedyFilms = document.querySelector('#comedy-2');
let horrorFilms = document.querySelector('#horror-2');
let thrillerFilms = document.querySelector('#thriller-2');


serialFilms.addEventListener('mouseenter', function() {
    listOpenFilms.classList.add('active-1');
})
serialFilms.addEventListener('mouseleave', function() {
    listOpenFilms.classList.remove('active-1');
})
serialMult.addEventListener('mouseenter', function() {
    listOpenMult.classList.add('active-1');
})
serialMult.addEventListener('mouseleave', function() {
    listOpenMult.classList.remove('active-1');
})
serialSerial.addEventListener('mouseenter', function() {
    listOpenSerial.classList.add('active-1');
})
serialSerial.addEventListener('mouseleave', function() {
    listOpenSerial.classList.remove('active-1');
})


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

actionFilms.addEventListener('click', function(event) {
     event.stopPropagation();    
    listOpenFilms.classList.remove('active');
           
     filterByGenres('Action');    
});
comedyFilms.addEventListener('click', function(event) {
     event.stopPropagation();    
    listOpenFilms.classList.remove('active');
   filterByGenres('Comedy');
});
horrorFilms.addEventListener('click', function(event) {
     event.stopPropagation();   
      listOpenFilms.classList.remove('active');
    filterByGenres('Horror');
});
thrillerFilms.addEventListener('click', function(event) {
     event.stopPropagation();   
   listOpenFilms.classList.remove('active');
   filterByGenres('Thriller');
});