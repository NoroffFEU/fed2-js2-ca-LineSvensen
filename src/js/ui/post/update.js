import { updatePost } from "../../api/post/update.js";

export async function onUpdatePost(event) {
    event.preventDefault();

    const postId = localStorage.getItem('editPostId');
    if (!postId) {
        console.error('No postId found in local storage.');
        return;
    }

    try {
        const postData = await fetchPosts(postId);

        if (!postData) {
            console.error('No post data found.');
            return;
        }

        const postTitle = document.getElementById('title').value;
        const postBody = document.getElementById('body').value;
        const postMediaUrl = document.getElementById('urlMedia').value;
        const postMediaAlt = document.getElementById('altMedia').value;

        const updatedPostData = {
            title: postTitle,
            body: postBody,
            media: {postMediaUrl, postMediaAlt}
        };

        try {
            const response = await  updatePost(postId, updatedPostData);

            if (response.ok) {
                alert('Post updated successfully!')
            } else {
                alert('Failed to update the post.')
            }
        } catch (error) {
            console.error('Error updating the post:', error);
            alert('An error occurred while updating the post.')
        }

    } catch (error) {
        console.error('Error updating post:', error);
        alert('An error occurred while updating the post.')
    }
}

//     const formData = new FormData(editForm);
//
//     const updatedPost = {
//         title: formData.get('title'),
//         body: formData.get('body'),
//         media: {
//             url: formData.get('urlMedia'),
//             alt: formData.get('altMedia')
//         }
//     };
//
//     try {
//         await updatedPost(postId, updatedPost);
//         alert('Changes Saved!');
//     } catch (error) {
//
//     }
//
//     // // Get the logged-in username from localStorage
//     // const username = localStorage.getItem('loggedInUsername');
//
//     // if (!username) {
//     //     console.log("No logged-in user found.");
//     //     return;
//     // }
//
//     // Fetch and populate the dropdown with existing posts for this user
//     try {
//         const posts = await fetchUserPosts(username); // Fetch posts for the logged-in user
//
//         console.log("Fetched posts:", posts); // Add this to log the fetched posts
//
//         if (posts.length === 0) {
//             console.log("No posts available for this user.");
//         }
//
//         // Clear any existing options in the dropdown
//         dropDown.innerHTML = '';
//
//         // Populate dropdown with user's posts
//         posts.forEach(post => {
//             const option = document.createElement('option');
//             option.value = post.id; // Use post ID as value
//             option.textContent = post.title; // Display post title
//             dropDown.appendChild(option);
//         });
//     } catch (error) {
//         console.log("Could not get any options for dropdown from server:", error);
//     }
//
//     // When the user selects a post, populate the form with its details
//     dropDown.addEventListener('change', async () => {
//         const postId = dropDown.value; // Get the selected post ID
//         if (!postId) return; // If no post is selected, do nothing
//
//         try {
//             const selectedPost = await fetchPosts(postId); // Fetch the post by its ID
//
//             // Fill the form with post details
//             postTitle.value = selectedPost.title;
//             postBody.value = selectedPost.body;
//             if (selectedPost.media && selectedPost.media.url) {
//                 postImage.value = selectedPost.media.url; // Set media URL if it exists
//             } else {
//                 postImage.value = ''; // Clear image field if no media is present
//             }
//
//         } catch (error) {
//             console.log("Error fetching selected post:", error);
//         }
//     });
//
//     // Handle form submission to update the post
//     editForm.addEventListener('submit', async (e) => {
//         e.preventDefault();
//
//         const formData = new FormData(editForm); // Extract form data
//
//         const updatedPost = {
//             title: formData.get('title'),
//             body: formData.get('body'),
//             media: {
//                 url: formData.get('urlMedia'),
//                 alt: formData.get('altMedia')
//             }
//         };
//
//         try {
//             await updatePost(postId, updatedPost); // Call updatePost with the ID and new data
//             alert("Changes saved!");
//         } catch (error) {
//             console.log("Error updating post:", error);
//             alert("Failed to update the post. Please try again.");
//         }
//     });
// }
