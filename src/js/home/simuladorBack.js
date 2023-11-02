function getNames(show) {
    fetch("https://localhost:7043/User")
        .then((response) => response.json() )
        .then((json) => show(json) )
        .catch((error) => console.log(JSON.stringify(error)));
};

// function getSkills(show) {
//     fetch("https://localhost:7043/User")
//         .then((response) => response.json() )
//         .then((json) => show(json) )
//         .catch((error) => console.log(JSON.stringify(error)));
// };