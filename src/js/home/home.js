const names = getNames();
showName(names);

function showName(names) {
    const homeContentTitle = document.getElementById('home-contentTitle'); 
    console.log(homeContentTitle)
    for (const name of names) {
        // console.log(card)
        const newName = new Name(name);
        // console.log(newProject)
        const template = getTemplate(newName);
        console.log(template)
        homeContentTitle.append(template);
    }
}

function getTemplate(name) {
    const h1 = document.createElement('h1');
    h1.className = 'home-title';
    
    h1.innerHTML = `   
                        Hola, soy <span class="title-name">${name.name} ${name.surname}</span>.
                        Te doy la bienvenida a mi <span class="highlighted">Portfolio Web</span>. 
                   `;
    return h1;
}