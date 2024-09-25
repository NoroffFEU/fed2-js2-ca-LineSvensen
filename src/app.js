import "./css/style.css";

import router from "./js/router";

await router(window.location.pathname);

// import { readPost, readPosts, readPostsByUser } from './post/read.js';

// Example: Fetch and display a single post by ID
async function displayPost(id) {
    try {
        const post = await readPost(id);  // Call the function from read.js
        const postContainer = document.getElementById('postContainer');
        postContainer.innerHTML = `
            <div>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>
        `;
    } catch (error) {
        console.error('Error displaying post:', error);
    }
}

// Example: Fetch and display a maximum of 12 posts
async function displayPosts() {
    try {
        const posts = await readPosts();  // Call the function from read.js
        const postContainer = document.getElementById('postContainer');
        postContainer.innerHTML = '';
        posts.forEach(post => {
            postContainer.innerHTML += `
                <div>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error displaying posts:', error);
    }
}

// Call the functions depending on what you need in app.js
// displayPost(1); // For a single post
// displayPosts();  // For fetching multiple posts
