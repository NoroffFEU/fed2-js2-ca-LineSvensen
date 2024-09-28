import { authGuard } from "../../utilities/authGuard";
import {readPosts} from "../../api/post/read.js";

authGuard();

async function renderPosts() {
    const posts = await readPosts();
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';

    posts.data.forEach((post) => {
        console.log(post)
        const postHTML = `
      <li class="single-post" data-id="${post.id}">
      <div class="wrapper-post-content">
      <div class="wrapper-post-author">
            <img class="avatar-img" src="${post.author.avatar.url || ""}" alt="${post.author.avatar.alt || "no image"}">
            <span class="name-post-author">${post.author.name}</span>
        </div>
        <img class="post-img" src="${post.media?.url || ""}" alt="${post.media?.alt || "no image"}">
        <div class="wrapper-title-and-react">
            <h2>${post.title}</h2>
            <div class="wrapper-comments-and-react">
           <div class="wrapper-comments">
                <span class="comment-counter">${post._count.comments}</span>
                <img class="comment-icon" src="../../../../public/images/comment.png" alt="Comment icon"/>
            </div>
            <div class="wrapper-react">
                <span class="react-counter">${post._count.reactions}</span>
                <img class="heart-react-icon" src="../../../../public/images/heart-filled-border.png" alt="Heart icon"/>
            </div> 
</div>
           
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