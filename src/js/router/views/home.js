import { authGuard } from "../../utilities/authGuard";

authGuard();


import {readPosts} from "../../api/post/read.js";

async function renderPosts() {
    const posts = await readPosts();
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';

    posts.data.forEach((post) => {
        console.log(post)
        const postHTML = `
      <li class="single-post" data-id="${post.id}">
        <div class="wrapper-post-author">
            <img class="avatar-img" src="${post.author.avatar.url || ""}" alt="${post.author.avatar.alt || "no image"}">
            <span class="name-post-author">${post.author.name}</span>
        </div>
        <img class="post-img" src="${post.media?.url || ""}" alt="${post.media?.alt || "no image"}">
        <div>
            <h2>${post.title}</h2>
            <div>
                <h2>${post._count.reactions}</h2>
                <div><i class="fa-light fa-heart"></i></div>
            </div>
        </div>
      </li>
    `;
        postList.innerHTML += postHTML;

    });
    document.querySelectorAll('.single-post').forEach((postElement) => {
      postElement.addEventListener('click', function (){
          const postId = postElement.getAttribute('data-id');
          localStorage.setItem('postId', postId);
          window.location.replace('/post/');
      });
    });
}

renderPosts();

