import {API_KEY, API_SOCIAL_POSTS} from "../constants.js";
import {getKey} from "../auth/key.js";

export async function readPosts(limit = 12, page = 1, tag) {

    const accessToken = await getKey();
    // const accessToken = localStorage.getItem('accessToken');

    const params = { limit, page };
    if (tag) {
        params.tag = tag;
    }

   const options = {
       headers: {
           'X-Noroff-API-Key': API_KEY,
           Authorization: `Bearer ${accessToken}`,
           'Content-Type': "application/json"
       },
   }
console.log(options)
    const response = await fetch(`${API_SOCIAL_POSTS}?${new URLSearchParams(params).toString()}`,
        options
        );

    if (!response.ok) {
        console.log('Response:', response);
        throw new Error(`Error fetching data: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;

}

// export async function readPost(id) {
//     const url = `${API_SOCIAL_POSTS}/${id}`;
//     return await fetchApi(url);
// }

// export async function readPostsByUser(username, limit = 12, page = 1, tag) {
//     const params = { limit, page, username };
//     if (tag) {
//         params.tag = tag;
//     }
//     return await fetchApi(`${API_SOCIAL_POSTS}/user/${username}`, params);
// }

// -----------------------------------------------------
// Original code:


// import {API_KEY, API_SOCIAL_POSTS, API_AUTH_KEY} from "../constants.js";
//
//
//
// export async function readPost(id) {
//
// }
//
// export async function readPosts(limit = 12, page = 1, tag) {
//
// }
//
// export async function readPostsByUser(username, limit = 12, page = 1, tag) {
//
// }
