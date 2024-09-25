import {API_SOCIAL_POSTS, API_KEY} from "../../api/constants.js";

export async function createPost({ title, body, tags, media }) {
    const response = await fetch (API_SOCIAL_POSTS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            title: title, // Required
            body: body || '', // Optional
            tags: tags.length > 0 ? tags : [], // Optional, ensure it's an array
            media: {
                url: media || '', // Optional, ensure it's a valid URL
                alt: 'Image description' // Provide a sensible default or gather from user input
            }
        })
    });
    return response;
}


