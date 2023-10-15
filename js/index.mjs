import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import { renderPostTemplate } from "./templates/index.mjs";


const path = location.pathname;

if (path === '/profile/login.html') {
    setLoginFormListener();
} else if (path === '/profile/register/') {
    setRegisterFormListener();
}


async function testTemplate() {
    const posts = await postMethods.getPosts();
    const post = posts(45)
    const container = document.querySelector("#post");
    renderPostTemplate(post)
}

testTemplate()
