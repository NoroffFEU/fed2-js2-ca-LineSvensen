export function onLogout() {
    localStorage.removeItem('accessToken');
    window.location.replace('/auth/');
}

