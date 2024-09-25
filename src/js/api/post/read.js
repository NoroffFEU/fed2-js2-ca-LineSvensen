// import { API_KEY, API_SOCIAL_POSTS } from "../constants.js";
//
// // Reusable fetch function
// async function fetchFromAPI(endpoint, queryParams = '') {
//     const accessToken = localStorage.getItem('accessToken');
//
//     try {
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-Noroff-API-Key': API_KEY,
//                 'Authorization': `Bearer ${accessToken}`
//             }
//         });
//
//         if (!response.ok) {
//             throw new Error(`Failed to fetch post`);
//         }
//
//         return await response.json();
//     } catch (error) {
//         console.error(`Error fetching from post:`, error);
//         throw error;
//     }
// }
//
//
// export async function readPost(id) {
//     try {
//         // Use the reusable fetch function
//         const post = await fetchFromAPI(`/${id}`);
//         return post;
//     } catch (error) {
//         console.error('Error fetching post:', error);
//         throw error;
//     }
// }
//
//
// export async function readPosts(limit = 12, page = 1, tag) {
//     const queryParams = `?limit=${limit}&page=${page}${tag ? `&tag=${tag}` : ''}`;
//
//     try {
//         const posts = await fetchFromAPI('', queryParams);  // No endpoint, just query params
//         return posts.data;  // Assuming posts are returned in the `data` field
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//         throw error;
//     }
// }
//
// export async function readPostsByUser(username, limit = 12, page = 1, tag) {
//     const queryParams = `?limit=${limit}&page=${page}&username=${username}${tag ? `&tag=${tag}` : ''}`;
//
//     try {
//         const posts = await fetchFromAPI('', queryParams);
//         return posts.data;
//     } catch (error) {
//         console.error('Error fetching posts by user:', error);
//         throw error;
//     }
// }
