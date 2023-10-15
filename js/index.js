import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";


const path = location.pathname;

if (path === '/profile/login.html') {
    setLoginFormListener();
} else if (path === '/profile/register.html') {
    setRegisterFormListener();
}

// import * as constants from "./api/constants.mjs";

// console.log(constants.API_SOCIAL_URL);