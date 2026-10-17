import { getElement, movies } from './dom';
const serialFilms = getElement('.serial-2');
const listOpenFilms = getElement('#list-open-2');
const serialMult = getElement('.serial-3');
const listOpenMult = getElement('#list-open-3');
const serialSerial = getElement('.serial-1');
const listOpenSerial = getElement('#list-open-1');
const actionFilms = getElement('#action-2');
const comedyFilms = getElement('#comedy-2');
const horrorFilms = getElement('#horror-2');
const thrillerFilms = getElement('#thriller-2');


serialFilms.addEventListener('mouseenter', function(): void {
    listOpenFilms.classList.add('active-1');
})
serialFilms.addEventListener('mouseleave', function(): void {
    listOpenFilms.classList.remove('active-1');
})
serialMult.addEventListener('mouseenter', function(): void {
    listOpenMult.classList.add('active-1');
})
serialMult.addEventListener('mouseleave', function(): void {
    listOpenMult.classList.remove('active-1');
})
serialSerial.addEventListener('mouseenter', function(): void {
    listOpenSerial.classList.add('active-1');
})
serialSerial.addEventListener('mouseleave', function(): void {
    listOpenSerial.classList.remove('active-1');
})


function filterByGenres(genre: string): void {
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

actionFilms.addEventListener('click', function(event: MouseEvent): void {
     event.stopPropagation();    
    listOpenFilms.classList.remove('active');
           
     filterByGenres('Action');    
});
comedyFilms.addEventListener('click', function(event: MouseEvent): void {
     event.stopPropagation();    
    listOpenFilms.classList.remove('active');
   filterByGenres('Comedy');
});
horrorFilms.addEventListener('click', function(event: MouseEvent): void {
     event.stopPropagation();   
      listOpenFilms.classList.remove('active');
    filterByGenres('Horror');
});
thrillerFilms.addEventListener('click', function(event: MouseEvent ): void {
     event.stopPropagation();   
   listOpenFilms.classList.remove('active');
   filterByGenres('Thriller');
});