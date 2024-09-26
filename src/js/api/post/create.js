// import {API_AUTH_KEY, API_SOCIAL_POSTS} from "/src/js/api/constants.js";
//
// export async function createPost({ title, body, media }) {
//     // const token = sessionStorage.getItem('token'); // Use the correct token name
//
//     try {
//         const response = await fetch(API_SOCIAL_POSTS, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-Noroff-API-KEY': API_AUTH_KEY,
//             },
//             body: JSON.stringify({ title, body, media });
//         });
//
//         // Check if the response is ok
//         if (!response.ok) {
//             throw new Error('Failed to create post');
//         }
//
//         return await response.json(); // Return the JSON response if successful
//     } catch (error) {
//         console.error(error); // Log the error for debugging
//         alert('Failed to create post. Please try again.'); // Notify the user
//         throw error; // Optionally re-throw the error if needed
//     }
// }







// import { getKey } from "../auth/key.js"; // Assuming this function retrieves the API token
// import { API_KEY, API_SOCIAL_POSTS } from "../constants.js";
//
// export async function createPost({ title, body, tags, media }) {
//     const myHeaders = new Headers();
//     myHeaders.append('X-Noroff-API-Key', API_KEY);
//     const token = await getKey();
//     myHeaders.append("Authorization", `Bearer ${token}`);
//
//     const postInput = {
//         title,
//         body,
//         tags: Array.isArray(tags) ? tags : (tags ? [tags] : []), // Ensures tags is always an array
//     };
//
//     if (media) {
//         postInput.media = {
//             url: media,
//             alt: "Image alt text", // Consider getting this from user input if relevant
//         };
//     }
//
//     const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: JSON.stringify(postInput),
//     };
//
//     try {
//         const response = await fetch(API_SOCIAL_POSTS, requestOptions); // Fixed the misplaced parenthesis
//         const result = await response.json();
//
//         if (response.ok) {
//             alert("Success!");
//             window.location.assign("/"); // Redirect to the homepage or success page
//         } else {
//             console.error(result);
//             alert("Could not post");
//         }
//     } catch (error) {
//         console.error("Error while creating post:", error);
//         alert("Failed");
//     }
// }



