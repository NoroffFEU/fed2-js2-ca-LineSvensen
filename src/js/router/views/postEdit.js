import { authGuard } from "../../utilities/authGuard";
import { onUpdatePost } from "../../ui/post/update.js";
import {API_SOCIAL_POSTS} from "../../api/constants.js";

// console.log('Calling authGuard');
authGuard();
//
// console.log('postEdit.js loaded successfully');

window.onload = () => {
    console.log('Window onload fired in postEdit.js');
};


// document.addEventListener('DOMContentLoaded', async () => {
//     console.log('Edit page loaded');
//     const postId = localStorage.getItem('editPostId');
//     if (!postId) {
//         console.error('No postId found in local storage');
//         return;
//     }
//
//     try {
//         const response = await fetch(`${API_SOCIAL_POSTS}/${postId}`);
//         const postData = await response.json();
//
//         document.getElementById('title').value = postData.title || '';
//         document.getElementById('body').value = postData.body || '';
//         document.getElementById('urlMedia').value = postData.media?.url || '';
//         document.getElementById('altMedia').value = postData.media?.alt || '';
//
//     } catch (error) {
//         console.error('Error fetching post data', error);
//     }
//
//     const form = document.getElementById('edit-posts-form');
//
//     if (form) {
//         form.addEventListener('submit', onUpdatePost);
//     }
// });