import { setLogoutListener } from "../global/logout.js";

export function onLogout() {
    localStorage.removeItem('accessToken');
    window.location.replace('/auth/');
}

setLogoutListener();
