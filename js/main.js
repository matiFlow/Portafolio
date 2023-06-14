// Obtener referencias a los elementos necesarios
const hamburguesa = document.querySelector('.hamburgesa');
const menuNavegacion = document.querySelector('header nav ul');

// Agregar evento de clic a la hamburguesa
hamburguesa.addEventListener('click', function() {
  menuNavegacion.classList.toggle('active');
});