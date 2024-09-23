// import { API_AUTH_LOGIN, API_KEY } from '../constants.js';
//
// export async function login({ email, password }) {
//     try {
//         const response = await fetch(API_AUTH_LOGIN, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-Noroff-API-Key': API_KEY
//             },
//             body: JSON.stringify({
//                 email: email,
//                 password: password
//             })
//         });
//
//         if (!response.ok) {
//             throw new Error('Invalid credentials');
//         }
//
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error during login:', error);
//         throw error;
//     }
// }


import { API_AUTH_LOGIN, API_KEY } from '../constants.js';

export async function login({ email, password }) {
    try {
        // Log the input to check if email and password are correct
        console.log('Login request:', { email, password });

        // Make the API request
        const response = await fetch(API_AUTH_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Noroff-API-Key': API_KEY
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        // Log the raw response for debugging
        console.log('Raw response:', response);

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error('Invalid credentials');
        }

        // Parse the response body to JSON and log it
        const data = await response.json();
        console.log('Parsed response data:', data);

        // Return the parsed data
        return data;
    } catch (error) {
        // Log any error encountered during the fetch or JSON parsing
        console.error('Error during login:', error);
        throw error;
    }
}
