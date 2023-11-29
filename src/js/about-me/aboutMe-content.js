class AboutUs {
    constructor(aboutMe){
        this.aboutMe = aboutMe.description;
        this.profilePhoto = "https://localhost:7043" + aboutMe.urlImage;;
    }
};

class TechnicalSkills {
    constructor(technicalSkill) {
        this.description = technicalSkill.description;
    }
}

class SoftSkills {
    constructor(softSkill) {
        this.description = softSkill.description;
        this.skillPhoto = softSkill.urlImage
    }
}