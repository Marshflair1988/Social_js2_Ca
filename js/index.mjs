
import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

const path = location.pathname;

if (path === '/profile/login.html') {
    listeners.setLoginFormListener();
} else if (path === '/profile/register.html') {
    listeners.setRegisterFormListener();
} else if (path === '/post/create/') {
    listeners.setCreatePostFormListener();
} else if (path === '/post/edit/') {
    listeners.setUpdatePostListener();
}

/*async function testTemplate() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#post");
    templates.renderPostTemplates(posts, container)
    
}



/*async function testTemplate() {
    const posts = await postMethods.getPosts();
    const post = posts[65];
    console.log(post)
    const container = document.querySelector("#post");
    renderPostTemplate(post, container)

    console.log(posts)
    
}*/

testTemplate(); 