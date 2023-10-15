export function postTemplateA(postData) {
    return `<div class="post">${postData.title}</div>`;
}

export function Templates(postData) {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerText = postData.title;
    return post;
}

    export function renderPostTemplate(postData, parent) {
    //parent.innerHTML = postTemplate(postData);

    parent.append(postTemplateB(postData))
}

