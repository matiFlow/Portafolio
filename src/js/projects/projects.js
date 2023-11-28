/*
const projects = getProjects();
showProject(projects);
*/

getProjects(showProject);

function showProject(projects) {
    const projects_containerProyect = document.getElementById('projects-containerProyect'); 
    for (const project of projects) {
        console.log(projects)
        // console.log(card)
        const newProject = new Projects(project);
        // console.log(newProject)
        const template = getTemplate(newProject);
        console.log(template)
        projects_containerProyect.append(template);
    }
}

function getTemplate(project) {
    const div = document.createElement('div');
    div.className = 'card';
    
    div.innerHTML = `   <!--card image-->
                        <img src="${project.imagen}" class="card-img-top" alt="blog">
                        <div class="card-body">
                            <!--card title-->
                            <h5 class="card-title">${project.title}</h5>
                            <!--card description-->
                            <p class="card-text">
                                ${project.description}
                            </p>
                            <!--card icons-->
                            <div class="icons">
                                <i class="${project.logoHtml || project.logoJava}"></i>
                                <i class="${project.logoCss || project.logoPython}"></i>
                            </div>
                            <!--card button-->
                            <div class="card-button">
                                <button type="button" class="btn btn-primary"><a
                                        href="${project.link}">Enlace</a></button>
                            </div>
                        </div>`;
    return div;
}