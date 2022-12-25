const id = new URL(location.href).searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
.then(value => value.json())
.then(value => {

const comments__row = document.querySelector('.comments__row');

    for (const {body,email,postId,name} of value) {

        const comments__item = document.createElement('div');
        comments__item.classList.add('comments__item');
        comments__item.classList.add('comment');

        const comment__colom = document.createElement('div');
        comment__colom.classList.add('comment__colom');

        const comment__title = document.createElement('h2');
        comment__title.classList.add('comment__title');
        comment__title.innerText = postId + ' ' + name;

        const comment__text = document.createElement('div');
        comment__text.classList.add('comment__text');
        comment__text.innerText = body;

        const comment_text = document.createElement('div');
        comment_text.classList.add('comment__text');
        comment_text.classList.add('comment__text-flex');
        comment_text.innerText = email;

        comment__colom.append(comment__title,comment_text,comment__text);

        comments__item.appendChild(comment__colom);

        comments__row.appendChild(comments__item);

    }
    console.log(value);
})