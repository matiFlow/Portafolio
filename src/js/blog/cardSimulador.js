function getBlogs(show) {
    fetch("https://localhost:7043/Card")
        .then((response) => response.json() )
        .then((json) => show(json) )
        .catch((error) => console.log(JSON.stringify(error)));
};