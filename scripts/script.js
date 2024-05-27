
function toggleDarkMode() {
  var element = document.body;
  var navbar = document.getElementById("navbar");
  var footer = document.getElementById("footer");
  var inputs = document.querySelectorAll('input');
  var textareas = document.querySelectorAll('textarea');
  var selects = document.querySelectorAll('select');
  var logo_espol = document.getElementById('logo-espol'); // Asegúrate de reemplazar 'myImage' con el id de tu imagen
  var logo_narviz = document.getElementById('logo-narviz'); // Asegúrate de reemplazar 'myImage' con el id de tu imagen

  element.classList.toggle("dark-mode");
  navbar.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");

  inputs.forEach(function(input) {
    input.classList.toggle("dark-mode");
  });

  textareas.forEach(function(textarea) {
    textarea.classList.toggle("dark-mode");
  });

  selects.forEach(function(select) {
    select.classList.toggle("dark-mode");
  });

  // Cambia la imagen cuando se aplica el modo oscuro
  if (element.classList.contains('dark-mode')) {
    logo_espol.src = 'https://talentohumano.espol.edu.ec/Sitio/imagenes/logo-espol-blanco.png'; // Asegúrate de reemplazar esto con la ruta a tu imagen de modo oscuro
  } else {
    logo_espol.src = 'https://capacitavirtual.espol.edu.ec/pluginfile.php/1/theme_lambda/logo/1708375954/logo_espol.png'; // Asegúrate de reemplazar esto con la ruta a tu imagen de modo claro
  }

  if (element.classList.contains('dark-mode')) {
    logo_narviz.src = 'https://iston.ec/img/cms/logo-narviz%202-05.png'; // Asegúrate de reemplazar esto con la ruta a tu imagen de modo oscuro
  } else {
    logo_narviz.src = 'https://narviz.com/wp-content/uploads/2023/08/logo-narviz-Actualizado_Mesa-de-trabajo-1.svg'; // Asegúrate de reemplazar esto con la ruta a tu imagen de modo claro
  }
}

window.onscroll = function() {scrollFunction()};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var mybutton = document.getElementById("scrollTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

