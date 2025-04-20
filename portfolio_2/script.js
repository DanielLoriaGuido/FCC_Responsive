document.addEventListener('DOMContentLoaded', function() {
    // Lógica para descargar el CV
    const downloadButton = document.getElementById('download-cv');
    if (downloadButton) {
      downloadButton.addEventListener('click', function(e) {
        e.preventDefault();
        alert('¡CV descargado correctamente!');
        // window.location.href = 'ruta/a/tu/cv.pdf';
      });
    }
  
    // Menú móvil funcional
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
      });
    }
  
    // Cerrar menú al hacer clic en un enlace (móvil)
    document.querySelectorAll('.nav-links a').forEach(item => {
      item.addEventListener('click', function() {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      });
    });
  
    // Envío del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Mensaje enviado! Gracias por contactarme.');
        contactForm.reset();
      });
    }
  });
  
  /*document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const closeMenu = document.querySelector('.close-menu');
  
    menuToggle.addEventListener('click', function() {
      navLinks.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  
    closeMenu.addEventListener('click', function() {
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  
    // Cerrar al hacer clic en enlaces
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  });*/

  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const closeMenu = document.querySelector('.close-menu');
  
    menuToggle.addEventListener('click', function () {
      navLinks.classList.add('active');
      menuToggle.classList.add('hidden');
      closeMenu.classList.add('visible');
      document.body.style.overflow = 'hidden';
    });
  
    closeMenu.addEventListener('click', function () {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('hidden');
      closeMenu.classList.remove('visible');
      document.body.style.overflow = '';
    });
  
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('hidden');
        closeMenu.classList.remove('visible');
        document.body.style.overflow = '';
      });
    });
  });
  