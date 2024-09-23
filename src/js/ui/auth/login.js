// import {login} from "../../api/auth/login.js";
//
// export async function onLogin(event) {
//     event.preventDefault();
//
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//
//     try {
//         const data = await login({email, password});
//
//         if (data.accessToken) {
//             const accessToken = data.accessToken;
//             const userName = data.email;
//
//             console.log(data);
//
//             localStorage.setItem('accessToken', accessToken);
//             localStorage.setItem('username', userName);
//
//             window.location.href = '../index.html';
//         } else {
//             alert('Invalid email or password. Please try again.');
//         }
//     } catch (error) {
//         console.error('Login error:', error);
//         alert('An error occurred. Please try again later.');
//     }
// }



// import { login } from "../../api/auth/login.js";
//
// export async function onLogin(event) {
//     event.preventDefault();
//
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//
//     try {
//         // Make the login request
//         const data = await login({ email, password });
//
//         // Log the response data for debugging
//         // console.log('Login response:', data);
//         console.log('Full login response data:', JSON.stringify(data, null, 2));
//
//
//         // Check if the data contains an accessToken
//         if (data && data.accessToken) {
//             const accessToken = data.accessToken;
//             const userName = data.email;
//
//             // Store token and username
//             localStorage.setItem('accessToken', accessToken);
//             localStorage.setItem('username', userName);
//
//             // Redirect the user after successful login
//             window.location.href = '../index.html';
//         } else {
//             // If no accessToken is present in the response, show an error
//             alert('Invalid email or password. Please try again.');
//         }
//     } catch (error) {
//         // Log the full error for debugging purposes
//         console.error('Login error:', error);
//         alert('An error occurred. Please try again later.');
//     }
// }


import { login } from "../../api/auth/login.js";

export async function onLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Make the login request
        const data = await login({ email, password });

        // Check if accessToken is returned
        if (data.data && data.data.accessToken) {
            const accessToken = data.data.accessToken;
            const userName = data.data.email;

            // Store token and username in localStorage
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('username', userName);

            // Log to confirm we have the right data
            console.log("Login successful!");
            console.log("AccessToken:", accessToken);
            console.log("Username:", userName);

            // Redirect to the home page after successful login
            window.location.href = '../index.html';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred. Please try again later.');
    }
}
