import { updatePost } from "../../api/post/update.js";
import { API_SOCIAL_POSTS, API_KEY } from '../../api/constants.js';
import { fetchPostData } from "../../api/post/update.js";
// Get post ID from local storage
// const id = localStorage.getItem('postId');

export async function onUpdatePost(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const mediaUrl = document.getElementById('media').value; // Assuming there's an input field for media URL
    const id = localStorage.getItem('postId'); // Ensure you retrieve the correct id

    try {
        const updatedPost = await updatePost(id, { // Use id here
            title,
            body,
            media: {
                url: mediaUrl,
                alt: '' // Add alt text if needed
            }
        });

        console.log('Post updated successfully:', updatedPost);

        // Clear postId from local storage
        localStorage.removeItem('postId');

        // Optionally redirect or show a success message
        window.location.href = '/profile/index.html'; // Change to your desired redirect path

    } catch (error) {
        console.error('Failed to update post:', error);
    }
}


// Load post data and populate the form when the page loads
// Window load event to autofill form fields

window.addEventListener('load', async () => {
    const id = localStorage.getItem('postId'); // Use id instead of postId
    const form = document.getElementById('editPostForm');
    if (id) { // Check if id exists
        try {
            const postData = await fetchPostData(id); // Use id here
            console.log('Fetched Post Data:', postData); // Log the fetched post data

            // Populate the form fields with the fetched data
            document.getElementById('title').value = postData.title || '';
            document.getElementById('body').value = postData.body || '';
            document.getElementById('media').value = postData.media.url || '';

        } catch (error) {
            console.error('Failed to populate form:', error);
        }
    } else {
        console.error('No id found in local storage.');
        // Optionally, redirect or display a message
    }

    form.addEventListener("submit", onUpdatePost); // Attach the submit handler
});



// Attach the submit handler
document.getElementById('editPostForm').addEventListener('submit', onUpdatePost);






// export async function onUpdatePost(event) {
//     event.preventDefault();
//
//     const postId = event.target.dataset.postId;
//     const title = document.querySelector('#post-title').value;
//     const body = document.querySelector('#post-body').value;
//     const mediaUrl = document.querySelector('#post-media-url').value;
//     const mediaAlt = document.querySelector('#post-media-alt').value;
//
//     const updatedPost = await updatePost(postId, {
//         title,
//         body,
//         media: {
//             url: mediaUrl,
//             alt: mediaAlt
//         }
//     });
//
//     if (updatedPost) {
//         alert('Post updated successfully!');
//         // Optionally, redirect or update the UI
//         window.location.reload();
//     } else {
//         alert('Failed to update the post.');
//     }
// }
//
//
