import lugares from './lugares.js';

// QuerySelectorAll selecciona todos los elementos. En este caso todos los que tienen clase nav-link
var links = document.querySelectorAll('.nav-link');

links.forEach(function (link) {
  if (link.href === window.location.href) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// Para agregar ícono dinámicamente dependiendo del estado actual del clima
const ICONOS = {
  Soleado: 'bi-brightness-high',
  Nublado: 'bi-cloudy-fill',
  Lluvioso: 'bi-cloud-rain-heavy',
  'Parcialmente nublado': 'bi-cloud-sun',
};

// 1. Obtener ID enviado por parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);

// Extraer id de los parametros
const locationId = urlParams.get('id');
// console.log(locationId);

// 2. Filtrar lugar del array a partir del ID
const lugarEncontrado = () => {
  const lugar = lugares.find((lugar) => {
    console.log(`Buscando en array lugares el lugar con id: ${locationId}`);
    return lugar.id == locationId;
  });
  return lugar;
};

// Ejecutar función para buscar lugar a través de su ID
const ciudadActual = lugarEncontrado();

// 3. Capturar contenedor de información del lugar
const lugarContainer = document.getElementById('lugar');

const mostrarLugar = () => {
  const content = `
          <div class="card mb-3">
            <div class="row g-0">
              <div
                class="col-lg-4 d-flex justify-content-center align-items-center"
              >
                <i class="bi ${
                  ICONOS[ciudadActual.estadoActual]
                }" style="font-size: 90px"></i>
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <h2 class="card-title">${ciudadActual.nombre}</h2>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">${
                      ciudadActual.estadoActual
                    }</li>
                    <li class="list-group-item">Temperatura: ${
                      ciudadActual.tempActual
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
console.log(ciudadActual.pronosticoSemanal);
ciudadActual.pronosticoSemanal.forEach((dia) => {
  const content = `
              <li class="list-group-item">
                <i class="bi ${ICONOS[dia.estado]}"></i> ${dia.dia}: ${
    dia.max
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

// 5.2 Función para calcular estadísticas, devolverá un objeto con los resultados
const estadisticasPronostico = () => {
  // 5.2.1 Obtener temperatura mínima semanal
  const temperaturasMinimas = ciudadActual.pronosticoSemanal.map(
    (dia) => dia.min
  );
  // console.log(temperaturasMinimas);
  const minimaSemanal = Math.min(...temperaturasMinimas);
  console.log(minimaSemanal);

  // 5.2.2 Obtener temperatura máxima semanal
  const temperaturasMaximas = ciudadActual.pronosticoSemanal.map(
    (dia) => dia.max
  );
  const maximaSemanal = Math.max(...temperaturasMaximas);

  // 5.2.3 Calcular promedio de temperaturas semanal
  const sumaTemperaturasMaximas = temperaturasMaximas.reduce(
    (acumulador, actual) => acumulador + actual,
    0
  );

  // promedio = sumaElementos / cantidadElementos
  let promedioSemanal = parseFloat(
    (sumaTemperaturasMaximas / temperaturasMaximas.length).toFixed(2)
  );

  // TODO: crear mensaje resumen de las estadísticas: cantidad de días por tipo de clima, resumen textual (Semana mayormente soleada, nublada, etc)

  return {
    minimaSemanal,
    maximaSemanal,
    promedioSemanal: formatFloatNumber(promedioSemanal),
  };
};

const estadisticas = estadisticasPronostico();

minTempContainer.textContent = estadisticas.minimaSemanal;
maxTempContainer.textContent = estadisticas.maximaSemanal;
avTempContainer.textContent = estadisticas.promedioSemanal;
