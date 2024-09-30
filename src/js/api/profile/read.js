import {API_KEY, API_SOCIAL_PROFILES} from "../constants.js";
import {getKey} from "../auth/key.js";

export async function readProfile(username) {
    const accessToken = await getKey();
    const options = {
        headers: {
            'X-Noroff-API-Key': API_KEY,
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch(`${API_SOCIAL_PROFILES}/${username}`, options)
    if (!response.ok) {
        console.error('Failed to fetch profile data:', response);
        throw new Error(`Error fetching profile data: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

export async function readProfiles(limit = 12, page = 1) {
    const accessToken = await getKey();
    const params = {limit, page};

    const options = {
        headers: {
            'X-Noroff-API-Key': API_KEY,
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch(`${API_SOCIAL_PROFILES}${new URLSearchParams(params)}`, options);
    if (!response.ok) {
        throw new Error(`Error fetching profiles: ${response.status}`);
    }
    const data = response.json();
    return data;
}

