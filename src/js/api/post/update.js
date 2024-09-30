
import { API_SOCIAL_POSTS, API_KEY, API_SOCIAL_PROFILES } from "../../api/constants.js";

import { readPost } from "./read.js";


export async function fetchPosts(postId) {
    try {
        const postData = await readPost(postId);
        console.log('Fetched post:', postData);
        return postData.data; // Return the actual post data
    } catch (error) {
        console.log('Error fetching single post:', error);
        return null;
    }
}

// Fetch all posts for a specific user
// Fetch all posts for a specific user with Bearer token authentication
export async function fetchUserPosts(username) {
    try {
        // Retrieve the accessToken from localStorage
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
            throw new Error("Access token is missing. Please log in.");
        }

        // Make the fetch call with the Bearer token in the Authorization header
        const response = await fetch(`${API_SOCIAL_PROFILES}/${username}/posts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`, // Add the Bearer token here
                'X-Noroff-API-Key': API_KEY,
            }
        });

        const data = await response.json();

        // Add detailed logs to check what the API returns
        console.log(`API response for ${username}'s posts:`, data);

        if (!response.ok) {
            throw new Error(data.errors ? data.errors[0].message : "An error occurred while fetching posts");
        }

        // Check if data.data exists and return posts
        if (data && data.data) {
            return data.data;
        } else {
            console.log('No posts found in API response');
            return []; // Return an empty array if no posts are found
        }
    } catch (error) {
        console.log('Error fetching user posts:', error);
        return [];
    }
}


// Update post
export async function updatePost(id, { title, body, media }) {
    try {
        const accessToken = localStorage.getItem('accessToken'); // Use localStorage for the token
        console.log("AccessToken:", accessToken);
        console.log("API KEY:", API_KEY);

        if (!accessToken) {
            throw new Error("Could not find accessToken");
        }

     
        const serverData = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
                'X-Noroff-API-Key': API_KEY,
            },
            body: JSON.stringify({ title, body, media })
        };

        console.log("Sending PUT request to:", `${API_SOCIAL_POSTS}/${id}`);
        console.log("Request options:", serverData);

        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, serverData);
        const data = await response.json();
        console.log("Response data:", data);

        if (!response.ok) {
            throw new Error(data.errors ? data.errors[0].message : "An error occurred while updating the post");
        }
        return { data, ok: response.ok };
    } catch (error) {
        console.log("Error in updating post:", error);
        throw error;
    }
}



// export async function fetchUserPosts(username) {
//     try {
//         const response = await fetch(`${API_SOCIAL_PROFILES}/${username}/posts`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         });
//
//         if (!response.ok) {
//             throw new Error("Failed to fetch posts");
//         }
//
//         const data = await response.json();
//         return data.data; // assuming the posts are in data.data array
//     } catch (error) {
//         console.log('Error fetching user posts:', error);
//         return [];
//     }
// }
//
//
//
//
//
//
// // Fetch a single post by ID
// export async function fetchPosts(postId) {
// import { API_SOCIAL_POSTS, API_KEY } from "../../api/constants.js";
// import { readPosts } from "read.js";
// import { readPost } from "read.js";
//
// // Fetch a single post by ID
// async function fetchPosts(postId) {
//     try {
//         const postData = await readPost(postId);
//         console.log('Fetched posts:', postData);
//         return postData;
//     } catch (error) {
//         console.log('Error fetching single post:', error);
//         return null;
//     }
// }
//
// // Fetch all posts

// export async function fetchAllPosts() {
// async function fetchAllPosts() {
//     try {
//         const response = await readPosts(); // Call the function to read all posts
//         return response; // Return the fetched data directly
//     } catch (error) {
//         console.log('Error fetching all posts:', error);
//         return [];
//     }
// }
//
// // Update post
// export async function updatePost(id, { title, body, tags, media }) {
//     try {
//         const accessToken = sessionStorage.getItem('accessToken');
//         console.log("AccessToken:", accessToken);
//         console.log("API KEY:", API_KEY);
//
//         if (!accessToken) {
//             throw new Error("Could not find accessToken");
//         }
//
//         const serverData = {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${accessToken}`,
//                 'X-Noroff-API-Key': API_KEY,
//             },
//             body: JSON.stringify({ title, body, tags, media })
//         };
//
//         console.log("Sending PUT request to:", `${API_SOCIAL_POSTS}/${id}`);
//         console.log("Request options:", serverData);
//
//         const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, serverData);
//         const data = await response.json();
//         console.log("Response data:", data);
//
//         if (!response.ok) {
//             throw new Error(data.errors ? data.errors[0].message : "An error occurred");
//         }
//         return { data, ok: response.ok };
//     } catch (error) {
//         console.log("Error in updating post:", error);
//         throw error;
//     }
// }

// Placeholder for the likePost function
export async function likePost(postId) {
    // Implement like post functionality here
}
//
// // Placeholder for the likePost function
// export async function likePost(postId) {
//     // Implement like post functionality here
// }
