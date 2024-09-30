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

// api/create.js


// api/create.js

// api/create.js





import { API_SOCIAL_POSTS, API_KEY } from "../../api/constants.js"; // Import your constants

// Function to create a post via the API
export async function createPost({ title, body, media, tags }) {
    try {
        // Retrieve the access token from session storage
        const accessToken = localStorage.getItem('accessToken');

        console.log("Access Token:", accessToken);
        console.log("API Key:", API_KEY);

        if (!accessToken) {
            throw new Error("Access token not found in session storage.");
        }

        // Create the headers object
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
                'X-Noroff-API-Key': API_KEY,
            },
            body: JSON.stringify({ title, body, tags, media }) // Include all necessary fields
        };

        console.log("Sending POST request to:", API_SOCIAL_POSTS);
        console.log("Request Options:", options);

        // Send the request
        const response = await fetch(API_SOCIAL_POSTS, options);
        const data = await response.json();
        console.log("Response Data:", data);

        if (!response.ok) {
            throw new Error(data.errors ? data.errors[0].message : "An error occurred");
        }

        return { data, ok: response.ok };
    } catch (error) {
        console.error('Error in createPost:', error);
        throw error;
    }
}



//
// // Import necessary constants
// import { API_AUTH_KEY, API_SOCIAL_POSTS } from "../constants.js"; // Adjust the path if necessary
//
// // Function to make a POST request to create a new post
// export async function createPost({ title, body, media }) {
//     try {
//         // Make a POST request to the API
//         const response = await fetch(API_SOCIAL_POSTS, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-Noroff-API-KEY': API_AUTH_KEY,
//             },
//             body: JSON.stringify({ title, body, media }),
//         });
//
//         // Parse the response as JSON
//         const data = await response.json();
//
//         // Return the response data and status
//         return { data, ok: response.ok };
//     } catch (error) {
//         // Handle any errors and return them for the UI layer to process
//         console.error("Error creating post:", error);
//         throw error;
//     }
// }
//
// console.log('Request Headers:', {
//     'Content-Type': 'application/json',
//     'X-Noroff-API-KEY': API_AUTH_KEY,
// });
//
// console.log('Response Data:', data); // Check the error message from the server
//
//
















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



