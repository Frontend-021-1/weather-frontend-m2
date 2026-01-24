import WeatherApp from './classes/WeatherApp.js';

const app = new WeatherApp();

// QuerySelectorAll selecciona todos los elementos. En este caso todos los que tienen clase nav-link
var links = document.querySelectorAll('.nav-link');

links.forEach(function (link) {
  if (link.href === window.location.href) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// 1. Obtener NOMBRE enviado por parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);

// Extraer NOMBRE de los parametros
const locationName = urlParams.get('name');
// console.log(locationName);

// 3. Capturar contenedor de información del lugar
const lugarContainer = document.getElementById('lugar');

// Mostrar sección de pronóstico semanal
const pronosticoContainer = document.getElementById('pronosticoSemanal');

// Mostrar spinners de carga
pronosticoContainer.innerHTML = '';
// Un spinner por cada día de la semana
for (let i = 0; i < 7; i++) {
  pronosticoContainer.innerHTML += `
    <li class="list-group-item">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </li>
  `;
}

await app.renderForecast(locationName, lugarContainer);

// Limpiar spinners
pronosticoContainer.innerHTML = '';
const ciudadActual = app.cityForecast;

// console.log(ciudadActual.pronosticoSemanal);
ciudadActual.forecast.forecastday.forEach((dia) => {
  console.log(dia);
  const content = `
              <li class="list-group-item">
                <img src="${dia.day.condition.icon}" class="card-image-top" ></i> ${dia.day.condition.text}: ${
                  dia.day.maxtemp_c
                }°C
              </li>
  `;
  pronosticoContainer.innerHTML += content;
});

// 5. Obtener estadísticas semanales y resumir datos

// 5.1 Capturar elementos de la tabla (td -> table datacell)
const minTempContainer = document.getElementById('minTemp');
const maxTempContainer = document.getElementById('maxTemp');
const avTempContainer = document.getElementById('avTemp');

// 5.2 Función para calcular estadísticas, devolverá un objeto con los resultados

const estadisticas = app.estadisticasPronostico();

minTempContainer.textContent = estadisticas.minimaSemanal;
maxTempContainer.textContent = estadisticas.maximaSemanal;
avTempContainer.textContent = estadisticas.promedioSemanal;

console.log(estadisticas);

// 5.2.6 Crear resumen textual
const generarMensajeResumen = (estado, tempMax, tempMin) => {
  return `Semana con clima mayormente ${estado}. La temperatura máxima de la semana fue ${tempMax}°C, la mínima de ${tempMin}°C.`;
};

const mensajeResumen = generarMensajeResumen(
  estadisticas.estadoPredominante,
  estadisticas.maximaSemanal,
  estadisticas.minimaSemanal,
);
console.log(mensajeResumen);

const containerMensajeResumen = document.getElementById('resumen');

containerMensajeResumen.innerHTML = `<p class="text-muted">${mensajeResumen}</p>`;

const encabezadosTablaEstadistica = document.getElementById(
  'titulosEstadisticas',
);
const contenidoTablaEstadistica = document.getElementById('filaEstadistica');

// Ocupar conteo de estados de la función estadisticaPronostico
Object.entries(estadisticas.conteoEstados).forEach(([estado, contador]) => {
  encabezadosTablaEstadistica.innerHTML += `<th scope="col">Días ${estado}</th>`;
  contenidoTablaEstadistica.innerHTML += `<td>${contador}</td>`;
});
