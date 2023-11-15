document.addEventListener('DOMContentLoaded', function() {
    // Obtén una referencia a los botones por su clase
    let botonesEliminar = document.querySelectorAll('.swt-delete');
    let botonesAgregar = document.querySelectorAll('.swt-add');
    let botonesEditar = document.querySelectorAll('.swt-upd');
  
    // Agrega un Event Listener para el evento de clic a los botones de eliminar
    botonesEliminar.forEach(function (boton) {
      boton.addEventListener('click', function(event) {
        // Evitar el comportamiento predeterminado del botón
        event.preventDefault();
        
        Swal.fire({
          icon: 'warning',
          title: 'Eliminado',
          text: 'Se ha eliminado Correctamente',
        });
      });
    });
  
    // Agrega un Event Listener para el evento de clic a los botones de agregar
    botonesAgregar.forEach(function (boton) {
      boton.addEventListener('click', function(event) {
        // Evitar el comportamiento predeterminado del botón
        event.preventDefault();
        
        Swal.fire({
          icon: 'success',
          title: 'Agregado',
          text: 'Se ha agregado Correctamente',
        });
      });
    });
  
    // Agrega un Event Listener para el evento de clic a los botones de editar
    botonesEditar.forEach(function (boton) {
      boton.addEventListener('click', function(event) {
        // Evitar el comportamiento predeterminado del botón
        event.preventDefault();
        
        Swal.fire({
          icon: 'info',
          title: 'Actualizado',
          text: 'Se ha actualizado Correctamente',
        });
      });
    });
  });
  