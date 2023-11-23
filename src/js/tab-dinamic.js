document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("matriculaTable");
    const rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        rows[i].addEventListener("click", function(event) {
            // Verificar si el clic se hizo en un enlace o botón
            const isAnchor = event.target.tagName.toLowerCase() === 'a';
            const isButton = event.target.tagName.toLowerCase() === 'button';

            // Si es un enlace o botón, evitar redirección automática
            if (isAnchor || isButton) {
                event.preventDefault();

                // Si es un enlace, realizar la redirección
                if (isAnchor) {
                    const link = event.target.getAttribute("href");
                    if (link) {
                        window.location.href = link;
                    }
                }
            } else {
                // Si no es un enlace o botón, realizar la redirección
                const link = this.getAttribute("data-href");
                if (link) {
                    window.location.href = link;
                }
            }
        });
    }
});