import { API_AUTH_KEY, API_AUTH_REGISTER } from "../../api/constants.js";

export async function onRegister(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!name || !email || !password) {
        alert("all fields are required!");
        return;
    }

    try {
        const response = await fetch(API_AUTH_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Noroff-API-KEY': API_AUTH_KEY,
            },
            body: JSON.stringify ({ name, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert("registration successful!");
        } else {
            alert("registration failed");
        }
    } catch (error) {
        alert("Error. Please try again.")
    }
}
