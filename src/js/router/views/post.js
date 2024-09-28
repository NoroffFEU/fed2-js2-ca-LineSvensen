// alert("Single Post Page");

import {readPost} from "../../api/post/read.js";

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
    <div>${singlePost.data.title}</div>
    <div>${singlePost.data.tags}</div>
    <div>${singlePost.data.body}</div>
    <img src="${singlePost.data.media?.url || ""}" alt="${singlePost.data.media?.alt || "no image"}">
    `
    } catch (error) {
        console.error('Error displaying single post:', error);
    }
}

displaySinglePost();