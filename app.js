// Elementos del DOM
const formulario = document.querySelector('#registroForm');
const inputNombre = document.querySelector('#nombre');
const inputEdad = document.querySelector('#edad');
const mensajeArea = document.querySelector('#mensajeArea');

function procesarFormulario(event) {
    event.preventDefault(); 

    const nombre = inputNombre.value.trim();
    const edad = parseInt(inputEdad.value, 10);

    mensajeArea.classList.remove('mensaje-positivo', 'mensaje-negativo', 'mensaje-oculto');

    if (edad >= 18) {
        mensajeArea.textContent = `✅ Bienvenido, ${nombre}, tienes acceso al evento.`;
        mensajeArea.classList.add('mensaje-positivo');
    } else {
        mensajeArea.textContent = `❌ Lo sentimos, ${nombre}, debes ser mayor de edad.`;
        mensajeArea.classList.add('mensaje-negativo');
    }
}

formulario.addEventListener('submit', procesarFormulario);
