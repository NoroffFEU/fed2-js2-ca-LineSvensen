// ui/create.js

import { createPost } from "../../api/post/create.js"; // Adjust the path as necessary


// Function to handle post creation
export async function onCreatePost(event) {
    event.preventDefault();

    // Gather the form input values
    const titleInput = event.target.title;
    const bodyInput = event.target.body;
    const mediaInput = event.target.media;
    const altInput = event.target.alt;
    const tagInput = event.target.tag;

    // Check if inputs exist
    if (!titleInput || !mediaInput || !tagInput) {
        alert("Please fill in all required fields.");
        return;
    }

    const title = titleInput.value;   // Required
    const body = bodyInput ? bodyInput.value : ""; // Optional
    const media = {
        url: mediaInput.value,        // Media URL from the form
        alt: altInput ? altInput.value : "",    // Optional alt text from the form
    };
    const tags = [tagInput.value];     // Assuming a tag input in your form

    try {
        // Call createPost with the gathered details
        const { data, ok } = await createPost({ title, body, media, tags });

        if (ok) {
            alert("Post created successfully!");
            // You may want to redirect or update the UI here
        } else {
            alert("Registration failed. " + (data.errors[0].message || "Check your input and try again."));
        }
    } catch (error) {
        alert("Error occurred while creating the post. Please try again.");
        console.error(error);
    }
}

// Add event listener to form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-form'); // Make sure this ID matches your HTML
    if (form) {
        form.addEventListener('submit', onCreatePost);
    }
});





// // ui/create.js
//
// // Import the createPost function from the API module
// import { createPost } from "/src/js/api/post/create.js"; // Adjust the path if necessary
//
// // Function to handle form submission and interaction with the API
// export async function onCreatePost(event) {
//     event.preventDefault();
//
//     // Retrieve input values from the form
//     const title = event.target.title.value;
//     const body = event.target.body.value;
//     const media = event.target.media.value;
//
//     try {
//         // Call the createPost function to handle the API request
//         const { data, ok } = await createPost({ title, body, media });
//
//         // Display appropriate messages based on the API response
//         if (ok) {
//             alert("Registration successful!");
//         } else {
//             alert("Registration failed. " + (data.message || "Check your input and try again."));
//         }
//     } catch (error) {
//         // Handle any errors
//         alert("Error. Please try again.");
//         console.error(error);
//     }
// }
//
// // Add event listener to form submission when the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('create-form'); // Ensure this ID matches your form's ID in the HTML
//     if (form) {
//         form.addEventListener('submit', onCreatePost); // Attach the submit event listener
//     }
// });





















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
//------------------------------------------------------------------------------
// import { createPost } from '../../api/post/create.js';
// import {API_AUTH_KEY, API_SOCIAL_POSTS} from "../../api/constants.js";
//
// export async function onCreatePost(event) {
//     event.preventDefault();
//
//     const title = event.target.title.value;
//     const body = event.target.body.value;
//     const media = event.target.media.value;
//
//     try {
//         const response = await fetch(API_SOCIAL_POSTS, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-Noroff-API-KEY': API_AUTH_KEY,
//             },
//             body: JSON.stringify({ title, body, media })
//         });
//
//         const data = await response.json();
//
//         if (response.ok) {
//             alert("Registration successful!");
//         } else {
//             alert("Registration failed. " + (data.message || "Check your input and try again."));
//         }
//     } catch (error) {
//         alert("Error. Please try again.");
//         console.error(error);
//     }
// }
//
// // Add event listener to form submission
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('create-form');
//     if (form) {
//         form.addEventListener('submit', onCreatePost);
//     }
// });
//-------------------------------------------------------------------


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
