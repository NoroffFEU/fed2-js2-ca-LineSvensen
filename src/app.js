import "./css/style.css";

import router from "./js/router";

await router(window.location.pathname);

import {onLogout} from "./js/ui/auth/logout.js";

onLogout();
