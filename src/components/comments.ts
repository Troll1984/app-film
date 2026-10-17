import { getElement } from './dom';

const formComments = document.querySelector<HTMLFormElement>('#form-comments');
if (!formComments) {
    throw new Error('Форма комментариев не найдена');
}
const showComments = getElement('.show-comments');
const counter = getElement('#counter');
type Comment = {
    name: string;
    comment: string;
};
function getComments(): Comment[] {
    const data = localStorage.getItem('key');

    if (!data) {
        return [];
    }

    try {
        return JSON.parse(data) as Comment[];
    } catch {
        return [];
    }
}

formComments.addEventListener('submit', function(event): void {
    event.preventDefault();
    let formData = new FormData(formComments);
    let user = String(formData.get('user.name') ?? '');
    let comment = String(formData.get('comment') ?? '');
    let newComments: Comment = {
        name: user,
        comment: comment 
    };

    
const comments = getComments();
    comments.push(newComments);
    localStorage.setItem('key', JSON.stringify(comments));
    formComments.reset();
    showCommetar();
});
showCommetar();

function showCommetar() {
     showComments.innerHTML = '';   
   
    const comments = getComments();
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
     if (!(event.target instanceof Element)) {
        return;
    }
     const button = event.target.closest('button[data-index]');
      if (!button || !showComments.contains(button)) {
        return;
    }
    const index = Number(button.getAttribute('data-index'));
    const comments = getComments();
     if (!Number.isInteger(index) || index < 0 || index >= comments.length) {
        return;
    }
     comments.splice(index, 1);

    localStorage.setItem('key', JSON.stringify(comments));

    showCommetar();
});
   
