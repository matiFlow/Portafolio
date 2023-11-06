getBlogs(showBlogs);

function showBlogs(blogs) {
    const cards_blog = document.getElementById('card-blog');
    for (const blog of blogs) {
        const newBlog = new Blog(blog);
        const template = getTemplate(newBlog);
        cards_blog.append(template); 
    }
}

function getTemplate(blog) {
    const div = document.createElement('div');
    div.className = 'col';
    div.innerHTML = `<div class="card">
                        <img src="${blog.img}" class="card-img-top" alt="imagen">
                        <div class="card-body">
                            <h5 class="card-title">${blog.title}</h5>
                            <p class="card-text">${blog.description}</p>
                            <a href="${blog.enlace}" class="card-link">Enlace</a>
                        </div>
                    </div>`;
    agregar_imagen_carrusel(blog.img)
    return div;
}


function agregar_imagen_carrusel(blog_img){
    const carousel_inner = document.getElementById('carousel-inner');
    const carrusel = document.createElement('div')
    carrusel.className = 'carousel-item active';

    carrusel.innerHTML = `<img src="${blog_img}" class="d-block" alt="Imagen del blog">`;
    carousel_inner.append(carrusel)
}