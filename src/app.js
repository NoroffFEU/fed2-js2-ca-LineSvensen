import "./css/style.css";

import router from "./js/router";


    await router(window.location.pathname);

    import {setLogoutListener} from "./js/ui/global/logout.js";

    setLogoutListener()


// read.js
    import {readPosts} from "./js/api/post/read.js";

    async function renderPosts() {
        const posts = await readPosts();
        const postList = document.getElementById("post-list");
        postList.innerHTML = "";

        posts.forEach((post) => {
            const postHTML = `
      <div>
        <h2>${post.title}</h2>
        <p>${post.content}</p>
      </div>
    `;
            postList.innerHTML += postHTML;
        });
    }

    renderPosts();
