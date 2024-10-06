// Selecciona los elementos del DOM.
const inputRed=document.getElementById('rojo');
const inputGreen=document.getElementById('verde');
const inputBlue=document.getElementById('azul');

const textoRed=document.getElementById('texto-rojo');
const textoGreen=document.getElementById('texto-verde');
const textoBlue=document.getElementById('texto-azul');

// Valores iniciales para definir el color RGB.
let red=inputRed.value;
let green=inputGreen.value;
let blue=inputBlue.value;

// Muestra los valores iniciales en los elementos <p>.
textoRed.textContent=red;
textoGreen.textContent=green;
textoBlue.textContent=blue;

// Actualiza el color de la página
function actualizarColor(red, green, blue) {
  document.body.style.backgroundColor=`rgb(${red}, ${green}, ${blue})`;
}

//Se encarga del input del color rojo
inputRed.addEventListener('input', (change) => {
  red=change.target.value;
  textoRed.textContent=red;
  actualizarColor(red, green, blue);
});

//Se encarga del input del color verde
inputGreen.addEventListener('input', (change) => {
  green=change.target.value;
  textoGreen.textContent=green;
  actualizarColor(red, green, blue);
});

//Se encarga del input del color azul
inputBlue.addEventListener('input', (change) => {
  blue=change.target.value;
  textoBlue.textContent=blue;
  actualizarColor(red, green, blue);
});
