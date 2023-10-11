//Get object literal "about us"
const aboutUs = getAboutUs();
showAboutUs(aboutUs);

//getAboutUs(showAboutUs)


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
                                                ${aboutMe.description}
                                            </p>
                                        </div>
                                        <div class="aboutMe-profile">
                                            <img src="${aboutMe.profilePhoto}" alt="Miqueas Drovetta">
                                        </div>
                                    `;
    return divAboutMeContentDetail;
    
};

//Get object literal "skills"
const skills = getSkills();
showSkills(skills);

function showSkills(skills) {
    const skillsContentMain = document.getElementById('skills-contentMain');
    for (const skill of skills) {
        const newSkill = new Skills(skill);
        const template = getTemplateSkills(newSkill);
        skillsContentMain.append(template);
    }
}

function getTemplateSkills(skill) {
    const divSkillsContainer = document.createElement('div');
    divSkillsContainer.className = 'skills-container';
    divSkillsContainer.innerHTML = `
                                    <div class="skills-technical visible" id="skills-technical">
                                        <h3>Tecnicas</h3>
                                        <!--button-->
                                        <div id="technical-button">
                                            <button class="btn btn-primary button_next" id="next">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"/></svg>
                                            </button>
                                        </div>
                                        <div class="technical-icons">
                                            <img src="${skill.technicalSkill_1}" alt="">
                                            <img src="${skill.technicalSkill_2}" alt="">
                                            <img src="${skill.technicalSkill_3}" alt="">
                                            <img src="${skill.technicalSkill_4}" alt="">
                                            <img src="${skill.technicalSkill_5}" alt="">
                                            <img src="${skill.technicalSkill_6}" alt="">
                                        </div>
                                    </div>
                                    <div class="skills-soft oculto" id="skills-soft">
                                        <h3>Blandas</h3>
                                        <!--button-->
                                        <div id="soft-button">
                                            <button class="btn btn-primary button_previous" id="previous">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"/></svg>
                                            </button>
                                        </div>
                                        <div class="soft-icons">
                                            <img src="${skill.softSkill_1}" alt="">
                                            <img src="${skill.softSkill_2}" alt="">
                                            <img src="${skill.softSkill_3}" alt="">
                                            <img src="${skill.softSkill_4}" alt="">
                                            <img src="${skill.softSkill_5}" alt="">
                                            <img src="${skill.softSkill_6}" alt="">
                                        </div>
                                    </div>
                                `;
    return divSkillsContainer;
};



/*Button next and previus */
const boton_a = document.getElementById("next")
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


