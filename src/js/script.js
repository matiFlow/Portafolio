const boton_a = document.getElementById("next")
const boton_b = document.getElementById("previous")

const contenedor_technical = document.getElementById("skills-technical")
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

//---------------------------------------------------------------------------------

