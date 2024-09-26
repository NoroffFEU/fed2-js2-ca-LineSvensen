// import { createPost } from '../../api/post/create.js';
//
// export async function onCreatePost(event) {
//     event.preventDefault();
//
//     const title = event.target.title.value;
//     const body = event.target.body.value;
//     const media = event.target.media.value;
//
//     try {
//         const response = await createPost({ title, body, media});
//         if (response) {
//             alert('Your post was created successfully and is now posted!');
//             event.target.reset();
//         } else {
//             alert('Oops! Error. Could not create post.');
//         }
//     } catch (error) {
//         console.error('Error occurred:', error);
//         alert('An unexpected error occurred.');
//     }
// }

import { createPost } from '../../api/post/create.js';
import {API_AUTH_KEY, API_SOCIAL_POSTS} from "../../api/constants.js";

export async function onCreatePost(event) {
    event.preventDefault();

    const title = event.target.title.value;
    const body = event.target.body.value;
    const media = event.target.media.value;

    try {
        const response = await fetch(API_SOCIAL_POSTS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Noroff-API-KEY': API_AUTH_KEY,
            },
            body: JSON.stringify({ title, body, media });
        });

        const data = await response.json();

        if (response.ok) {
            alert("Registration successful!");
        } else {
            alert("Registration failed. " + (data.message || "Check your input and try again."));
        }
    } catch (error) {
        alert("Error. Please try again.");
        console.error(error);
    }
}

// Add event listener to form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-form');
    if (form) {
        form.addEventListener('submit', onCreatePost);
    }
});



// Ensure DOM is fully loaded before adding event listeners
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('create-form');
//     if (form) {
//         form.addEventListener('submit', onCreatePost);
//     }
//
//     const addTagsButton = document.getElementById('add-tag');
//     const tagsContainer = document.getElementById('tags-container');
//
//     // Check if the button and container exist
//     if (addTagsButton && tagsContainer) {
//         addTagsButton.addEventListener('click', () => {
//             const newTagInput = document.createElement('input');
//             newTagInput.setAttribute('type', 'text');
//             newTagInput.setAttribute('name', 'tags[]');
//             newTagInput.setAttribute('placeholder', 'enter a tag');
//             tagsContainer.appendChild(newTagInput);
//         });
//     } else {
//         console.error('Add tag button or tags container not found.');
//     }
// });









//
// import { createPost } from '../../api/post/create.js';
// export async function onCreatePost(event) {
//     document.addEventListener('DOMContentLoaded', () => {
//         const createPostForm = document.getElementById('create-form');
//
//         createPostForm.addEventListener('submit', async (event) => {
//             event.preventDefault();
//
//             const formData = new FormData(createPostForm);
//             const title = formData.get('title');
//             const body = formData.get('body');
//             const imageUrl = formData.get('image');
//
//             try {
//                 const response = await createPost({title, body, imageUrl});
//                 if (response.ok) {
//                     alert('Your post was created successfully and is now posted!');
//                     event.target.reset();
//                 } else {
//                     alert('Oops! Error. Could not create post.');
//                 }
//             } catch (error) {
//                 console.error('Error occurred:', error);
//                 alert('An unexpected error occurred.');
//             }
//
//         });
//     });
// }
//





// import { createPost } from "src/js/api/post/create.js"; // Ensure the import path is correct
//
// // Function to handle the form submission
// export async function onCreatePost(event) {
//     event.preventDefault(); // Prevent the default form submission
//
//     // Retrieve values from the form
//     const title = event.target.title.value;
//     const body = event.target.body.value;
//     const media = event.target.media.value;
//
//     // Collect tags from input fields
//     const tags = Array.from(event.target.querySelectorAll('input[name="tags[]"]')).map(input => {
//         return input.value.trim().toLowerCase();
//     }).filter(tag => tag); // Filter out any empty tags
//
//     // Prepare the post object
//     const postInput = {
//         title,
//         body,
//         media,
//         tags,
//     };
//
//     try {
//         // Call the createPost function to create a new post
//         const response = await createPost(postInput);
//
//         // Handle success or failure within the createPost function, no need to handle here
//     } catch (error) {
//         console.error('Error occurred:', error);
//     }
// }
//
// // Function to dynamically add more tag input fields
// function addTagInput() {
//     const tagsContainer = document.getElementById('tags-container');
//     const newTagInput = document.createElement('input');
//     newTagInput.setAttribute('type', 'text');
//     newTagInput.setAttribute('name', 'tags[]');
//     newTagInput.setAttribute('placeholder', 'Enter another tag');
//     tagsContainer.appendChild(newTagInput);
// }
//
// // Attach event listeners
// document.getElementById('create-form').addEventListener('submit', onCreatePost);
// document.getElementById('add-tag').addEventListener('click', addTagInput);
//
