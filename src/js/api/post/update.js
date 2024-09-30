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
//
// // Placeholder for the likePost function
// export async function likePost(postId) {
//     // Implement like post functionality here
// }
