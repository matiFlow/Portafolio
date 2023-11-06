function getAboutUs(show) {
    fetch("https://localhost:7043/User")
        .then((response) => response.json() )
        .then((json) => show(json) )
        .catch((error) => console.log(JSON.stringify(error)));
};

function getTechnicalSkills(show) {
    fetch("https://localhost:7043/User")
        .then((response) => response.json() )
        .then((json) => show(json) )
        .catch((error) => console.log(JSON.stringify(error)));
};

function getSoftSkills(show) {
    fetch("https://localhost:7043/User")
        .then((response) => response.json() )
        .then((json) => show(json) )
        .catch((error) => console.log(JSON.stringify(error)));
};

