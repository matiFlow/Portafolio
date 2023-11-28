class Projects {
    constructor(project) {
        this.imagen = "https://localhost:7043" + project.urlImage;
        this.description = project.description;
        this.title = project.title;
        /* 
        this.logoHtml = project.logoHtml;
        this.logoCss = project.logoCss;
        this.logoPython = project.logoPython;
        this.logoJava = project.logoJava;
        this.link = project.link;
        */
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