import lugaresForecastJson from '../../lugares-forecast-api.json' with { type: 'json' };

// QuerySelectorAll selecciona todos los elementos. En este caso todos los que tienen clase nav-link
var links = document.querySelectorAll('.nav-link');

links.forEach(function (link) {
  if (link.href === window.location.href) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// 1. Obtener ID enviado por parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);

// Extraer id de los parametros
const locationName = urlParams.get('name');
// console.log(locationName);

// 2. Filtrar lugar del array a partir del ID
const lugarEncontrado = () => {
  return lugaresForecastJson.find(
    (lugar) => lugar.location.name === locationName,
  );
};

// Ejecutar función para buscar lugar a través de su ID
const ciudadActual = lugarEncontrado();
console.log(ciudadActual);

// 3. Capturar contenedor de información del lugar
const lugarContainer = document.getElementById('lugar');

const mostrarLugar = () => {
  const content = `
          <div class="card mb-3">
            <div class="row g-0">
              <div
                class="col-lg-4 d-flex justify-content-center align-items-center"
              >
                <img src="${ciudadActual.current.condition.icon}" class="card-image-top">
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <h2 class="card-title">${ciudadActual.location.name}</h2>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">${
                      ciudadActual.current.condition.text
                    }</li>
                    <li class="list-group-item">Temperatura: ${
                      ciudadActual.current.temp_c
                    }°C</li>
                  </ul>
                  <p class="card-text">
                    <small class="text-body-secondary"
                      >Última actualización hace 3 minutos</small
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
  `;

  lugarContainer.innerHTML += content;
};

mostrarLugar();

// Mostrar sección de pronóstico semanal
const pronosticoContainer = document.getElementById('pronosticoSemanal');
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

// TODO: mostrar estadísticas de la semana
// 5. Obtener estadísticas semanales y resumir datos

// 5.1 Capturar elementos de la tabla (td -> table datacell)
const minTempContainer = document.getElementById('minTemp');
const maxTempContainer = document.getElementById('maxTemp');
const avTempContainer = document.getElementById('avTemp');

// Función para formatear Números decimales, que en vez de puntos tengan comas
const formatFloatNumber = (num) => {
  return num.toLocaleString('es-CL');
};

const definirEstadoPredominante = (conteoEstados) => {
  let estadoPredominante;

  if (
    conteoEstados.Soleado > conteoEstados.Nublado &&
    conteoEstados.Soleado > conteoEstados.Lluvioso &&
    conteoEstados.Soleado > conteoEstados['Parcialmente nublado']
  ) {
    estadoPredominante = 'Soleado';
  } else if (
    conteoEstados.Nublado > conteoEstados.Soleado &&
    conteoEstados.Nublado > conteoEstados.Lluvioso &&
    conteoEstados.Nublado > conteoEstados['Parcialmente nublado']
  ) {
    estadoPredominante = 'Nublado';
  } else if (
    conteoEstados.Lluvioso > conteoEstados.Soleado &&
    conteoEstados.Lluvioso > conteoEstados.Nublado &&
    conteoEstados.Lluvioso > conteoEstados['Parcialmente nublado']
  ) {
    estadoPredominante = 'Lluvioso';
  } else if (
    conteoEstados['Parcialmente nublado'] > conteoEstados.Soleado &&
    conteoEstados['Parcialmente nublado'] > conteoEstados.Nublado &&
    conteoEstados['Parcialmente nublado'] > conteoEstados.Lluvioso
  ) {
    estadoPredominante = 'Parcialmente Nublado';
  } else {
    estadoPredominante = 'variado';
  }

  return estadoPredominante;
};

// 5.2 Función para calcular estadísticas, devolverá un objeto con los resultados
const estadisticasPronostico = () => {
  // 5.2.1 Obtener temperatura mínima semanal
  const temperaturasMinimas = ciudadActual.forecast.forecastday.map(
    (dia) => dia.day.mintemp_c,
  );
  // console.log(temperaturasMinimas);
  const minimaSemanal = Math.min(...temperaturasMinimas);
  console.log(minimaSemanal);

  // 5.2.2 Obtener temperatura máxima semanal
  const temperaturasMaximas = ciudadActual.forecast.forecastday.map(
    (dia) => dia.day.maxtemp_c,
  );
  const maximaSemanal = Math.max(...temperaturasMaximas);

  // 5.2.3 Calcular promedio de temperaturas semanal
  const sumaTemperaturasMaximas = temperaturasMaximas.reduce(
    (acumulador, actual) => acumulador + actual,
    0,
  );

  // promedio = sumaElementos / cantidadElementos
  let promedioSemanal = parseFloat(
    (sumaTemperaturasMaximas / temperaturasMaximas.length).toFixed(2),
  );

  // 5.2.4 Calcular conteo de días por estado del clima
  const estadosSemanal = ciudadActual.forecast.forecastday.map(
    (dia) => dia.day.condition.text,
  );

  const estadosUnicos = [...new Set(estadosSemanal)];

  const conteoEstados = {};

  estadosUnicos.forEach((estado) => {
    conteoEstados[estado] = ciudadActual.forecast.forecastday.filter(
      (dia) => dia.day.condition.text === estado,
    ).length;
  });

  // 5.2.5 Determinar estado predominante (el más frecuente) de la semana
  const estadoPredominante = definirEstadoPredominante(conteoEstados);

  return {
    minimaSemanal,
    maximaSemanal,
    promedioSemanal: formatFloatNumber(promedioSemanal),
    conteoEstados,
    estadoPredominante,
  };
};

const estadisticas = estadisticasPronostico();

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
