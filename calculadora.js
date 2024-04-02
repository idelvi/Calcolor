function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Definir una lista de colores para la paleta
var colores = [ '#283618', '#5e3023', '#423e37', '#5d576b', '#393e41']; // Ejemplo: rojo, verde, azul
var coloresFondos = [ '#606c38', '#c08552', '#e3b23c', '#d496a7', '#FF715B']; // Ejemplo: rojo, verde, azul
var coloresDisplay = [ '#fefae0', '#f3e9dc', '#edebd7', '#f1dede', '#edebd7']; // Ejemplo: rojo, verde, azul
var indiceColor = 0; // Índice para alternar entre los colores

// Obtener referencia a la calculadora y a los botones
var cambiarColores = document.getElementById('botonCambiarColores');
var calculadora = document.querySelector('.calculadora');
var display = document.querySelector('.displayShadow');
var botones = document.querySelectorAll('.BShadow');
var body = document.querySelector('body');

// Manejar clics en la calculadora
botonCambiarColores.addEventListener('click', function(evento) {
  // Verificar si el clic se hizo en un botón que no es parte de la calculadora
  if (!evento.target.closest('.calculadora')) {
    // Obtener el próximo color de la lista de colores
    var color = colores[indiceColor];
    var colorfondo = coloresFondos[indiceColor];
    var colorDisplay = coloresDisplay[indiceColor];
    indiceColor = (indiceColor + 1) % colores.length; // Avanzar al siguiente color

    // Aplicar el color a la calculadora y a los botones
    calculadora.style.setProperty('--color-primario', color);
    display.style.setProperty('--color-secundario', colorDisplay);
    body.style.setProperty('--color-fondo', colorfondo);
    cambiarColores.style.backgroundColor = color;
    cambiarColores.style.color = colorDisplay;

    botones.forEach(function(boton) {
      boton.style.backgroundColor = color;
      boton.style.color = colorDisplay;
    });

  }
});

botones.forEach(function(botonclick) {
    botonclick.addEventListener('click', function() {
      // Agregar clase para aplicar estilos de botón presionado
      botonclick.classList.add('boton-presionado');
      
      // Después de un corto tiempo, quitar la clase de botón presionado
      setTimeout(function() {
        botonclick.classList.remove('boton-presionado');
      }, 100); // Tiempo en milisegundos, puedes ajustarlo según sea necesario
    });
  });