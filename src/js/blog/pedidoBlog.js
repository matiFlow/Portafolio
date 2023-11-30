function getBlogs(show) {
    fetch("https://localhost:7043/Blog/user/4")
        .then((response) => response.json() )
        .then((json) => show(json) )
        .catch((error) => console.log(JSON.stringify(error)));
};