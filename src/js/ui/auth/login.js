import { login } from "../../api/auth/login.js";

export async function onLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const data = await login({email, password});

        if (data.data && data.data.accessToken) {
            const accessToken = data.data.accessToken;
            const userName = data.data.email;

            console.log("stored in local storage:")
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('name', userName);

            window.location.href = '/';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred. Please try again later.');
    }
}

