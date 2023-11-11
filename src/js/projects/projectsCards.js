class Projects {
    constructor(project) {
        this.img = project.img;
        this.title = project.title;
        this.description = project.description;
        this.logoHtml = project.logoHtml;
        this.logoCss = project.logoCss;
        this.logoPython = project.logoPython;
        this.logoJava = project.logoJava;
        this.link = project.link;
    }
}

class Projects2 {
    constructor(project) {
        this.img = project.img;
        this.title = project.title;
        this.description = project.description;
        this.tecnology = project.technologiesByProject.tecnology.description
    }
}