import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs";


const path = location.pathname;

if (path === '/profile/login.html') {
    setLoginFormListener();
} else if (path === '/profile/register.html') {
    setRegisterFormListener();
}


//post.createPost()
//post.updatePost()
//post.removePost()
//post.getPost()
post.getPost(6825).then(console.log);
    


