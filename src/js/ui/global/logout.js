import {onLogout} from "../auth/logout.js";

export function setLogoutListener() {
    const logoutBtn = document.getElementById('logout-btn');

    if (!logoutBtn) {
        console.log('No logout button found');
        return;
    }

    // Add event listener here
    logoutBtn.addEventListener('click', function () {
        onLogout();
    });
}


