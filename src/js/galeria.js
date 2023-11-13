document.addEventListener("DOMContentLoaded", function () {
  const imagenes = document.querySelectorAll(".galeria__imagenes img");

  imagenes.forEach((img) => {
    img.addEventListener("click", (e) => {
      abrirModal(e.target.src);
    });
  });

  function abrirModal(src) {
    // Crear el elemento div y añadirle la clase 'modal'
    const modal = document.createElement('div');
    modal.classList.add('modal');

    // Crear la imagen y establecer su atributo src
    const imagenModal = document.createElement('img');
    imagenModal.src = src;

    // Crear el icono de cierre
    const iconoCierre = document.createElement('i');
    iconoCierre.classList.add('fas', 'fa-times', 'icono-cierre');

    // Agregar un evento de click al icono de cierre para cerrar el modal
    iconoCierre.addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto'; // Aquí cambiamos overflow a 'auto' cuando el modal se cierre
    });

    // Añadir la imagen y el icono de cierre al modal
    modal.appendChild(imagenModal);
    modal.appendChild(iconoCierre);

    // Añadir el modal al body del documento
    document.body.appendChild(modal);

    // Cambiar overflow a 'hidden' cuando el modal se abra
    document.body.style.overflow = 'hidden';
}

});
