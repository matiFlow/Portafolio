//Get object literal "about us"
// const aboutUs = getAboutUs();
// showAboutUs(aboutUs);

getAboutUs(showAboutUs);

function showAboutUs(aboutUs) {
    const aboutMeContentMain= document.getElementById('aboutMe-contentMain');
    for (const aboutMe of aboutUs) {
        const newAboutMe = new AboutUs(aboutMe);
        const template = getTemplate(newAboutMe);
        aboutMeContentMain.append(template);
    }
}

function getTemplate(aboutMe) {
    const divAboutMeContentDetail= document.createElement('div');
    divAboutMeContentDetail.className = 'aboutMe-contentDetail';
    divAboutMeContentDetail.innerHTML = `
                                        <div class="aboutMe-containerDescription">
                                            <p class="aboutMe-detail">
                                                ${aboutMe.aboutMe}
                                            </p>
                                        </div>
                                        <div class="aboutMe-profile">
                                            <img src="${aboutMe.profilePhoto}" alt="Miqueas Drovetta">
                                        </div>
                                    `;
    return divAboutMeContentDetail;
    
};

//Get object literal "skills"
// const skills = getSkills();
// showSkills(skills);

getTechnicalSkills(showTechnicalSkills);

function showTechnicalSkills(technicalSkills) {
    const technicalskillsContentMain = document.getElementById('technical-icons');
    for (const technicalSkill of technicalSkills) {
        const newTechnicalSkill = new TechnicalSkills(technicalSkill);
        const template = getTemplateTechnicalSkills(newTechnicalSkill);
        technicalskillsContentMain.append(template);
    }
}

function getTemplateTechnicalSkills(technicalSkill) {
    const divTechnicalSkillsContainer = document.createElement('p');
    divTechnicalSkillsContainer.className = 'technical_skills';
    divTechnicalSkillsContainer.innerHTML = `
                                    ${technicalSkill.description}
                                `;
    return divTechnicalSkillsContainer;
};

/* soft-skills */

getSoftSkills(showSoftSkills);

function showSoftSkills(softSkills) {
    const softskillsContentMain = document.getElementById('soft-icons');
    for (const softSkill of softSkills) {
        const newSoftSkill = new SoftSkills(softSkill);
        const template = getTemplateSoftSkills(newSoftSkill);
        softskillsContentMain.append(template);
    }
}

function getTemplateSoftSkills(softSkill) {
    const divSoftSkillsContainer = document.createElement('i');
    divSoftSkillsContainer.className = 'soft_skills';
    divSoftSkillsContainer.innerHTML = `
                                    ${softSkill.description}
                                `;
    return divSoftSkillsContainer;
};





/*Button next and previus */
const boton_a = document.getElementById("next");
console.log(boton_a);
const boton_b = document.getElementById("previous")

const contenedor_technical = document.getElementById("skills-technical")
console.log(contenedor_technical)
const contenedor_soft = document.getElementById("skills-soft")

boton_a.addEventListener('click', () => {
    contenedor_technical.classList.remove('visible');
    contenedor_technical.classList.add('oculto');
    contenedor_soft.classList.remove('oculto');
    contenedor_soft.classList.add('visible');
});
  
boton_b.addEventListener('click', () => {
    contenedor_soft.classList.remove('visible');
    contenedor_soft.classList.add('oculto');
    contenedor_technical.classList.remove('oculto');
    contenedor_technical.classList.add('visible');
});


