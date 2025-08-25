// Simulación de envío de formulario
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("¡Gracias por tu mensaje, Julio será contactado contigo pronto!");
  this.reset();
});

// Opcional: efecto de aparición al hacer scroll (puedes expandirlo luego)
document.addEventListener("DOMContentLoaded", function() {
  console.log("Página cargada correctamente");
});