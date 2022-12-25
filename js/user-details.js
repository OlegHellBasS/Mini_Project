const id = new URL(location.href).searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {

        const user__colom = document.querySelector('.user__colom');

        const iterObj = (obj)=>{

            for (const key in obj) {

                if (typeof obj[key] === "object"){

                    const user__title = document.createElement('h2');
                    user__title.classList.add('user__title');
                    user__title.innerText = key;

                    user__colom.appendChild(user__title);

                    iterObj(obj[key])

                }else {

                    const user__text = document.createElement('div');
                    user__text.classList.add('user__text');
                    user__text.innerText = key + ' - ' + obj[key];

                    user__colom.appendChild(user__text);

                }
            }

        }

        iterObj(value)

        const user__btn = document.createElement('button');
        user__btn.classList.add('user__btn');
        user__btn.innerText = 'post of current user';
        user__btn.onclick = ()=>{

            fetch(`https://jsonplaceholder.typicode.com/users/${value.id}/posts`)
                .then(value1 => value1.json())
                .then(value1 => {

                    const posts__row = document.querySelector('.posts__row');

                    for (const {body,id,title,userId} of value1) {

                        const post = document.createElement('div')
                        post.classList.add('post');

                        const post__body = document.createElement('div');
                        post__body.classList.add('post__body');
                        post__body.innerText = body;

                        const post__title = document.createElement('h2');
                        post__title.classList.add('post__title');
                        post__title.innerText = id + ' ' + title;

                        const post__btn = document.createElement('button');
                        post__btn.innerText = 'post-details';
                        post__btn.classList.add('post__btn');
                        post__btn.onclick = () => location.href = `post-details.html?id=${id}`;

                        posts__row.appendChild(post);

                        post.append(post__title,post__body,post__btn);

                    }
                    console.log(value1);
                })


        };

        user__colom.appendChild(user__btn);


    })
console.log(id);