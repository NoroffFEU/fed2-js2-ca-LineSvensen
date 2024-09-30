import "./css/style.css";
import {readProfile} from "./js/api/profile/read.js";

import router from "./js/router";

await router(window.location.pathname);

import {setLogoutListener} from "./js/ui/global/logout.js";

setLogoutListener()

document.querySelector('.my-profile').addEventListener('click', function () {
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    if (loggedInUsername) {
        localStorage.removeItem('profileUsername');
    }
});