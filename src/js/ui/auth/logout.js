
export function onLogout() {
        const logoutBtn = document.getElementById('logout-btn');

        if (!logoutBtn){
            console.log('no logout btn found');
            return;
        }

        logoutBtn.addEventListener('click', function () {
            window.location.replace('/auth/')
            localStorage.removeItem('accessToken');
        })
}
