import { authGuard } from "../../utilities/authGuard";

authGuard();


import {readPosts} from "../../api/post/read.js";

async function renderPosts() {
    const posts = await readPosts();
    const postList = document.getElementById("post-list");
    postList.innerHTML = "";


    posts.data.forEach((post) => {
        const postHTML = `
      <li>
        <h2>${post.title}</h2>
        <p>${post.tags}</p>
        <p>${post.body}</p>
        <img src="${post.media.url}" alt="${post.media.alt}">
      </li>
    `;
        postList.innerHTML += postHTML;
    });
}

renderPosts();