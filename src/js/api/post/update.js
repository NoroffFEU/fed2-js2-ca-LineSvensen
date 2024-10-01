import { getKey } from "../auth/key";
import {API_SOCIAL_POSTS, API_KEY, API_SOCIAL_PROFILES} from '../constants.js';
import {getKey} from "../auth/key.js";

const postId = localStorage.getItem('postId'); // Replace with the actual post ID

const updatedPost = {
    title: "Updated Title",
    body: "Updated content of the post.",
    tags: ["newtag1", "newtag2"],
    media: {
        url: "https://url.com/updated-image.jpg",
        alt: "Updated image description"
    }
};

export async function updatePost(id, updatedPost) { // Change postId to id
    const accessToken = localStorage.getItem('accessToken');
    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, { // Use id here
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
                'X-Noroff-API-Key': API_KEY,
            },
            body: JSON.stringify(updatedPost) // Ensure the updatedPost is correct
        });

        if (!response.ok) {
            throw new Error(`Error updating post: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data; // Return the updated post data
    } catch (error) {
        console.error('Failed to update post:', error);
        throw error; // Propagate the error
    }
}



updatePost(postId, updatedPost)
    .then(data => console.log('Post updated:', data))
    .catch(error => console.error('Error updating post:', error));


export async function fetchPostData(id) { // Change postId to id
    const accessToken = localStorage.getItem('accessToken');
    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, { // Use id here
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
                'X-Noroff-API-Key': API_KEY,
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching post: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data); // Log the fetched data
        return data; // Return the fetched post data
    } catch (error) {
        console.error('Failed to fetch post data:', error);
        throw error; // Propagate the error
    }
}



// export async function updatePost(updatedPost) {
//     const accessToken = localStorage.getItem('accessToken');
//     try {
//         const response = await fetch(`${API_SOCIAL_POSTS}/${username}/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${accessToken}`, // Assuming you have stored the API key
//                 'X-Noroff-API-Key': API_KEY,
//             },
//             body: JSON.stringify({ updatedPost })
//         });
//
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//
//         const updatedPost = await response.json();
//         return updatedPost.data; // Return the updated post data
//     } catch (error) {
//         console.error(error);
//         throw error; // Propagate the error
//     }
// }





export async function likePost(postId) {
    // Implement like post functionality here
}


// local store get item
//
// display post in a form
//
// post elements can be edited in form
//
// when going away from page, empty postId

