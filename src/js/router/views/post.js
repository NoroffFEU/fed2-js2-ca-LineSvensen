// alert("Single Post Page");

import {readPost} from "../../api/post/read.js";
import {likePost} from "../../api/post/update.js";

async function displaySinglePost () {
    const postId = localStorage.getItem('postId');
    if (!postId) {
        console.error('No postId found in localStorage.');
        return;
    }

    try {
        const singlePost = await readPost(postId);
        console.log(singlePost);

        const postWrapper = document.getElementById('post-wrapper');
        postWrapper.innerHTML += `
<div class="wrapper-post-content">
<div class="wrapper-post-author" data-username="${singlePost.data.author.name}">
    <img class="avatar-img" src="${singlePost.data.author.avatar.url || ""}" alt="${singlePost.data.author.avatar.alt || "no image"}">
    <span class="name-post-author">${singlePost.data.author.name}</span>
</div>
    <img class="post-img" src="${singlePost.data.media?.url || ""}" alt="${singlePost.data.media?.alt || "no image"}">
    <div class="post-title">${singlePost.data.title}</div>
    <div class="post-body">${singlePost.data.body}</div>
    <div class="wrapper-comments-and-react">
        <div class="wrapper-comments">
            <span class="comment-counter">Comments:</span>
            <span class="comment-counter">${singlePost.data._count.comments}</span>
            <img class="comment-icon" src="../../../../public/images/comment.png" alt="Comment icon"/>
        </div>
        <div class="wrapper-react">
            <span class="react-counter">${singlePost.data._count.reactions}</span>
            <img class="heart-react-icon" src="../../../../public/images/heart-empty.png" alt="Empty Heart"/>
        </div>
        <div class="render-comments"></div>
    </div>
    </div>
    `;
        document.querySelector('.wrapper-post-author').addEventListener('click', function () {
            const username = this.getAttribute('data-username');
            localStorage.setItem('profileUsername', username);
            window.location.replace('/profile/');
        })
    } catch (error) {
        console.error('Error displaying single post:', error);
    }


    // document.querySelectorAll('.single-post').forEach((postElement) => {
    //     const heartReactIcon = document.querySelector('.heart-react-icon');
    //     const postId = postElement.getAttribute('data-id');
    //
    //     postElement.querySelector('.wrapper-react').addEventListener('click', async function () {
    //         if(heartReactIcon.src.includes('heart-empty.png')){
    //             heartReactIcon.src = '../../../../public/images/heart-filled.png';
    //             heartReactIcon.alt = 'Filled Heart';
    //         } else {
    //             heartReactIcon.src = '../../../../public/images/heart-empty.png';
    //             heartReactIcon.alt = 'Empty Heart';
    //         }
    //     })
    // })
}

displaySinglePost();