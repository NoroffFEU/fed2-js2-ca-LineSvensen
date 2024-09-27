alert("Single Post Page");

import {readPost} from "../../api/post/read.js";

console.log('hello');
async function displaySinglePost (post) {
    console.log('this is post:', post)
    const postId = localStorage.getItem('postId');
    const singlePost = await readPost(postId);
    console.log(singlePost);

    const postWrapper = document.getElementById('post-wrapper');
    postWrapper.innerHTML = '';

    postWrapper.innerHTML += `
    <div>${singlePost.data.title}</div>
    <div>${singlePost.data.tags}</div>
    <div>${singlePost.data.body}</div>
    <img src="${singlePost.data.media?.url || ""}" alt="${singlePost.data.media?.alt || "no image"}">
    `
}

const post = {};

displaySinglePost(post);