let formComments = document.querySelector('#form-comments');
let showComments = document.querySelector('.show-comments');
let counter = document.querySelector('#counter');
let count = 0;

formComments.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(formComments);
    let user = formData.get('user.name');
    let comment = formData.get('comment');
    let newComments = {
        name: user,
        comment: comment 
    };
    let comments = JSON.parse(localStorage.getItem('key')) || [];
    comments.push(newComments);
    localStorage.setItem('key', JSON.stringify(comments));
    formComments.reset();
    showCommetar();
});
showCommetar();

function showCommetar() {
     showComments.innerHTML = '';
    let comments = JSON.parse(localStorage.getItem('key')) || [];
   
   
    for(let[index, comment] of comments.entries()) {
        showComments.innerHTML += 
        `<div class="comment">
            <div class="info">
                <h1>${comment.name}</h1>
                <p>${comment.comment}</p>
            </div>
           
            <button data-index="${index}">✖</button>
        </div>`
        
    }
    counter.textContent = `${comments.length}`;
}
showComments.addEventListener('click', function(event) {
    if(event.target.tagName === 'BUTTON') {
        let index = event.target.dataset.index;
        let comments = JSON.parse(localStorage.getItem('key')) || [];
        comments.splice(index, 1);
        localStorage.setItem('key', JSON.stringify(comments));
        showCommetar();
    }
});
