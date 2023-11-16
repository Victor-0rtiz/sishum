document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.querySelector(".navegacion__mobile-menu-icon i");
  const mobileMenu = document.querySelector(".navegacion__div--url");
  const mobileMenuLinks = document.querySelectorAll(".navegacion__div--url a");
  const elementsToHideOnMobileMenu = document.querySelectorAll(".elementos-a-ocultar");

  mobileMenuIcon.addEventListener("click", toggleMobileMenu);

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", hideMobileMenu);
  });

  function toggleMobileMenu() {
    mobileMenu.classList.toggle("show");

    elementsToHideOnMobileMenu.forEach((element) => {
      element.classList.toggle("hide-on-mobile-menu");
    });
  }

  function hideMobileMenu() {
    mobileMenu.classList.remove("show");

    elementsToHideOnMobileMenu.forEach((element) => {
      element.classList.remove("hide-on-mobile-menu");
    });
  }

  const imagenes = document.querySelectorAll(".galeria__imagenes img");

  imagenes.forEach((img) => {
    img.addEventListener("click", (e) => {
      abrirModal(e.target.src);
      hideMobileMenu();
    });
  });

  function abrirModal(src) {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const imagenModal = document.createElement("img");
    imagenModal.src = src;

    const iconoCierre = document.createElement("i");
    iconoCierre.classList.add("fas", "fa-times", "icono-cierre");

    iconoCierre.addEventListener("click", () => {
      document.body.removeChild(modal);
      document.body.style.overflow = "auto";
    });

    modal.appendChild(imagenModal);
    modal.appendChild(iconoCierre);

    document.body.appendChild(modal);

    document.body.style.overflow = "hidden";
  }
});
