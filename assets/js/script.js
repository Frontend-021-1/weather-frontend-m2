// import lugares from './lugares.js';
import WeatherApp from './classes/WeatherApp.js';

const lugaresContainer = document.getElementById('lugares');

// Instancia de clase weatherapp
const lugares = [
  'Santiago',
  'Arica',
  'Puerto Natales',
  'Concepción',
  'Talcahuano',
  'Temuco',
];
const app = new WeatherApp();

// Ejecuta método principal de la clase
app.renderWeather(lugares, lugaresContainer);

// Manejo del DOM con JS
// QuerySelectorAll selecciona todos los elementos. En este caso todos los que tienen clase nav-link
var links = document.querySelectorAll('.nav-link');

links.forEach(function (link) {
  if (link.href === window.location.href) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
