class AboutUs {
    constructor(aboutMe){
        this.aboutMe = aboutMe.aboutMe;
        this.profilePhoto = aboutMe.profile_photo;
    }
};

class Skills {
    constructor(skill) {
        this.technicalSkill_1 = skill.technologies[0];
        this.technicalSkill_2 = skill.technologies[1];
        this.technicalSkill_3 = skill.technologies[2];
        this.technicalSkill_4 = skill.technologies[3];
        this.technicalSkill_5 = skill.technologies[4];
        this.technicalSkill_6 = skill.technologies[5];

        this.softSkill_1 = skill.job_skills[0];
        this.softSkill_2 = skill.job_skills[1];
        this.softSkill_3 = skill.job_skills[2];
        this.softSkill_4 = skill.job_skills[3];
        this.softSkill_5 = skill.job_skills[4];
        this.softSkill_6 = skill.job_skills[5];
    }
}