
import { updatePost, fetchUserPosts, fetchPosts } from "../../api/post/update.js";

export async function onUpdatePost(event) {
    event.preventDefault();

    // Get the necessary form elements
    const editForm = document.getElementById('edit-posts-form');
    const dropDown = document.getElementById('post-dropdown');
    const postTitle = document.getElementById('title');
    const postBody = document.getElementById('body');
    const postImage = document.getElementById('media');

    // Get the logged-in username from localStorage
    const username = localStorage.getItem('loggedInUsername');

    if (!username) {
        console.log("No logged-in user found.");
        return;
    }

    // Fetch and populate the dropdown with existing posts for this user
    try {
        const posts = await fetchUserPosts(username); // Fetch posts for the logged-in user

        console.log("Fetched posts:", posts); // Add this to log the fetched posts

        if (posts.length === 0) {
            console.log("No posts available for this user.");
        }

        // Clear any existing options in the dropdown
        dropDown.innerHTML = '';

        // Populate dropdown with user's posts
        posts.forEach(post => {
            const option = document.createElement('option');
            option.value = post.id; // Use post ID as value
            option.textContent = post.title; // Display post title
            dropDown.appendChild(option);
        });
    } catch (error) {
        console.log("Could not get any options for dropdown from server:", error);
    }

    // When the user selects a post, populate the form with its details
    dropDown.addEventListener('change', async () => {
        const postId = dropDown.value; // Get the selected post ID
        if (!postId) return; // If no post is selected, do nothing

        try {
            const selectedPost = await fetchPosts(postId); // Fetch the post by its ID

            // Fill the form with post details
            postTitle.value = selectedPost.title;
            postBody.value = selectedPost.body;
            if (selectedPost.media && selectedPost.media.url) {
                postImage.value = selectedPost.media.url; // Set media URL if it exists
            } else {
                postImage.value = ''; // Clear image field if no media is present
            }

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
                url: formData.get('image') // Use image URL from form
            }
        };

        try {
            await updatePost(postId, updatedPost); // Call updatePost with the ID and new data
            alert("Changes saved!");
        } catch (error) {
            console.log("Error updating post:", error);
            alert("Failed to update the post. Please try again.");
        }
    });
}
