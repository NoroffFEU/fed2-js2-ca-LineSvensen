import { updatePost } from "../../api/post/update.js";
import { fetchPosts, fetchAllPosts } from "../../api/post/read.js"; // Corrected import paths

export async function onUpdatePost(event) {
    event.preventDefault();

    // Get the necessary form elements
    const editForm = document.getElementById('edit-posts-form');
    const dropDown = document.getElementById('post-dropdown');
    const postTitle = document.getElementById('title');
    const postBody = document.getElementById('body');
    const postImage = document.getElementById('image');

    // Fetch and populate the dropdown with existing posts
    try {
        const postsResponse = await fetchAllPosts(); // Call fetchAllPosts to get all posts
        const posts = postsResponse.data;

        posts.forEach(post => {
            const option = document.createElement('option'); // Create a proper 'option' element
            option.value = post.id;
            option.textContent = post.title;
            dropDown.appendChild(option); // Append to the dropdown
        });
    } catch (error) {
        console.log("Could not get any options for dropdown from server:", error);
    }

    // When the user selects a post, populate the form with its details
    dropDown.addEventListener('change', async () => {
        const postId = dropDown.value; // Get selected post ID
        try {
            const selectedPost = await fetchPosts(postId); // Fetch the post by its ID
            document.getElementById('title').value = selectedPost.data.title; // Fill form fields
            document.getElementById('body').value = selectedPost.data.body;
            document.getElementById('image').value = selectedPost.data.media.url;
        } catch (error) {
            console.log("Error fetching selected post:", error);
        }
    });

    // Handle form submission to update the post
    editForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const postId = dropDown.value; // Get the selected post ID
        const formData = new FormData(editForm); // Extract form data
        const updatedPost = {
            title: formData.get('title'),
            body: formData.get('body'),
            media: {
                url: formData.get('image')
            }
        };

        try {
            await updatePost(postId, updatedPost); // Call updatePost with the ID and new data
            alert("Changes saved!");
        } catch (error) {
            console.log("Error updating post:", error);
        }
    });
}
