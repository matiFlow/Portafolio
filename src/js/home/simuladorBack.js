function getNames(show) {
    fetch("https://localhost:7043/User/4")
        .then((response) => response.json() )
        .then((json) => showName(json))
        .catch((error) => console.log(JSON.stringify(error)));
};


