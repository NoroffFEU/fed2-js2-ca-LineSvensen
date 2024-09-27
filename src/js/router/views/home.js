import { authGuard } from "../../utilities/authGuard";

authGuard();


import {readPosts} from "../../api/post/read.js";

async function renderPosts() {
    const posts = await readPosts();
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';

    posts.data.forEach((post) => {
        const postHTML = `
      <li class="single-post" data-id="${post.id}">
        <h2>${post.title}</h2>
        <p>${post.tags}</p>
        <p>${post.body}</p>
        <img src="${post.media?.url || ""}" alt="${post.media?.alt || "no image"}">
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

