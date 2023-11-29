function getAboutUs(show) {
    fetch("https://localhost:7043/User/4")
        .then((response) => response.json() )
        .then((json) => showAboutUs(json) )
        .catch((error) => console.log(JSON.stringify(error)));
};

function getTechnicalSkills(show) {
    fetch("https://localhost:7043/Tecnology/user/4")
        .then((response) => response.json() )
        .then((json) => showTechnicalSkills(json) )
        .catch((error) => console.log(JSON.stringify(error)));
};

function getSoftSkills(show) {
    fetch("https://localhost:7043/SoftSkill/User/4")
        .then((response) => response.json() )
        .then((json) => showSoftSkills(json) )
        .catch((error) => console.log(JSON.stringify(error)));
};

