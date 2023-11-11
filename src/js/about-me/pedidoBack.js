function getAboutUs(show) {
    fetch("https://localhost:7043/User")
        .then((response) => response.json() )
        .then((json) => showAboutUs(json) )
        .catch((error) => console.log(JSON.stringify(error)));
};

function getTechnicalSkills(show) {
    fetch("https://localhost:7043/User")
        .then((response) => response.json() )
        .then((json) => show(json) )
        .catch((error) => console.log(JSON.stringify(error)));
};

function getSoftSkills(show) {
    fetch("https://localhost:7043/SoftSkill/user/1")
        .then((response) => response.json() )
        .then((json) => showSoftSkills(json) )
        .catch((error) => console.log(JSON.stringify(error)));
};

