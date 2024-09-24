import { API_AUTH_KEY, API_AUTH_REGISTER } from "../../api/constants.js";

export async function onRegister(event) {
    event.preventDefault();

    // Collect values from the form
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const bio = event.target.bio.value; // Optional
    const avatarUrl = event.target.avatar.value; // URL
    const bannerUrl = event.target.banner.value; // URL

    // Basic validation for required fields
    if (!name || !email || !password) {
        alert("Name, email, and password fields are required!");
        return;
    }

    // Construct the payload
    const payload = {
        name: name,
        email: email,
        password: password,
        bio: bio || undefined, // If not provided, send as undefined
        avatar: {
            url: avatarUrl || undefined, // If not provided, send as undefined
            alt: "Profile Picture" // Default alt text for avatar
        },
        banner: {
            url: bannerUrl || undefined, // If not provided, send as undefined
            alt: "Banner Image" // Default alt text for banner
        },
        venueManager: true // Optional: set based on your application's logic
    };

    // Send the POST request
    try {
        const response = await fetch(API_AUTH_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Noroff-API-KEY': API_AUTH_KEY,
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Registration successful!");
        } else {
            alert("Registration failed. " + (data.message || "Check your input and try again."));
        }
    } catch (error) {
        alert("Error. Please try again.");
        console.error(error);
    }
}

// Add event listener to form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    if (form) {
        form.addEventListener('submit', onRegister);
    }
});
