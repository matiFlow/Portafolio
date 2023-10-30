const blog = getBlog();
showBlog(blogs);

function showBlog(blogs) {
    const cards_blog = document.getElementById('cards-blog');
    for (const blog of blogs) {
        const newBlog = new Blog(blog);
        const template = getTemplate(newBlog);
        cards_blog.append(template);
    }
}

function getTemplate(blog) {
    const div = document.createElement('div');
    div.className = 'col';

    div.innerHTML = `   <div class="card">
                            <!--card image-->
                            <img src="${project.img}" class="card-img-top" alt="blog">
                            <div class="card-body">
                                <!--card title-->
                                <h5 class="card-title">${project.title}</h5>
                                <!--card description-->
                                <p class="card-text">
                                    ${project.description}
                                </p>
                                <!--card icons-->
                                <div class="icons">
                                    <i class="${project.logoHtml || project.logoJava}"></i>
                                    <i class="${project.logoCss || project.logoPython}"></i>
                                </div>
                                <!--card button-->
                                <div class="card-button">
                                    <button type="button" class="btn btn-primary"><a
                                            href="${project.link}">Enlace</a></button>
                                </div>
                            </div>
                        </div>`;
    return div;
}

function getTemplate(blog) {
    const div = document.createElement('div');
    div.className = 'card';

    div.innerHTML = `<div class="card">
                        <img src="${blog.img}" class="card-img-top" alt="imagen">
                        <div class="card-body">
                            <h5 class="card-title">${blog.title}</h5>
                            <p class="card-text">${blog.description}</p>
                        </div>
                    </div>`;
    return div;
}