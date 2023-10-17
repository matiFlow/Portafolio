function getAboutUs(show) {
    fetch("https://localhost:7003/AboutMe")
        .then((response) => response.json() )
        .then((json) => show(json) )
        .catch((error) => console.log(JSON.stringify(error)));

    /*
    return [
        {
            description: '¡Hola! Soy programador, fiel cafetero... Nunca me quedo quieto, y menos cuando hay excelentes oportunidades para aprovecharlas. Actualmente desarrollo backend y bases de datos. Conozco y programo en los lenguajes de programación más conocidos: Java, C#, Python, JavaScript, Delphi y Haskell. Además, uso constantemente en proyectos HTML, CSS, Bootstrap, Angular y .NET. Mis estudios formales me abren grandes puertas, pero también ser autodidacta y la experiencia laboral me llevan a avanzar mucho más rápido. Espero haberles aclarado algunas dudas sobre mí.',
            profilePhoto: '../img/about-me/perfil.jpeg',
        }
    ]
     */
};

function getSkills(show) {
    fetch("https://localhost:7003/AboutMe")
        .then((response) => response.json() )
        .then((json) => show(json) )
        .catch((error) => console.log(JSON.stringify(error)));

    /* 
    return [
        {
            technicalSkill_1: '../img/about-me/icon-python.svg',
            technicalSkill_2: '../img/about-me/icon-javascript.svg',
            technicalSkill_3: '../img/about-me/icon-c.svg',
            technicalSkill_4: '../img/about-me/icon-html5.svg',
            technicalSkill_5: '../img/about-me/icon-css3.svg',
            technicalSkill_6: '../img/about-me/icon-bootstrap.svg',

            softSkill_1: '../img/about-me/icon-python.svg',
            softSkill_2: '../img/about-me/icon-javascript.svg',
            softSkill_3: '../img/about-me/icon-c.svg',
            softSkill_4: '../img/about-me/icon-html5.svg',
            softSkill_5: '../img/about-me/icon-css3.svg',
            softSkill_6: '../img/about-me/icon-bootstrap.svg',
        }
    ]
    */
};

