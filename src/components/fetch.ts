import { getElement, movies } from './dom';
const btn = getElement('#btn');
const serial = getElement('.serial');
const listOpen = getElement('#list-open');
const action = getElement('#action');
const comedy = getElement('#comedy');
const horror = getElement('#horror');
const thriller = getElement('#thriller');
const arrow = getElement('#arrow');
const main = getElement('#main');
const logo = getElement('.logo');


const search = document.querySelector<HTMLInputElement>('#search');

if (!search) {
    throw new Error('Поле поиска не найдено');
}
let isHover: boolean = false;

btn.addEventListener('mouseenter', function(): void {
    isHover = true;
})
btn.addEventListener('mouseleave', function(): void {
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


function filterByGenres(genre: string) {
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

action.addEventListener('click', function(event: MouseEvent) {
     event.stopPropagation();    
    listOpen.classList.remove('active');
           
     filterByGenres('Action');    
});
comedy.addEventListener('click', function(event: MouseEvent) {
     event.stopPropagation();    
    listOpen.classList.remove('active');
   filterByGenres('Comedy');
});
horror.addEventListener('click', function(event: MouseEvent) {
     event.stopPropagation();   
      listOpen.classList.remove('active');
    filterByGenres('Horror');
});
thriller.addEventListener('click', function(event: MouseEvent) {
     event.stopPropagation();   
   listOpen.classList.remove('active');
   filterByGenres('Thriller');
});

btn.addEventListener('click', function() {         
    let movie: string = search.value;
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


