// QuerySelectorAll selecciona todos los elementos. En este caso todos los que tienen clase nav-link
var links = document.querySelectorAll('.nav-link');

links.forEach(function (link) {
  if (link.href === window.location.href) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// Array de lugares: Contendrá listado de ciudades (mínimo 5)
/* 
id, nombre del lugar, temperatura actual, estadoActual, pronostico semanal (array de objetos)
*/
const lugares = [
  {
    id: 1,
    nombre: 'Santiago',
    tempActual: 30,
    estadoActual: 'Soleado',
    pronosticoSemanal: [
      {
        dia: 'Lunes',
        min: 16,
        max: 30,
        estado: 'Soleado',
      },
      {
        dia: 'Martes',
        min: 18,
        max: 28,
        estado: 'Nublado',
      },
      {
        dia: 'Miércoles',
        min: 15,
        max: 25,
        estado: 'Lluvioso',
      },
      {
        dia: 'Jueves',
        min: 17,
        max: 27,
        estado: 'Soleado',
      },
      {
        dia: 'Viernes',
        min: 19,
        max: 29,
        estado: 'Parcialmente nublado',
      },
      {
        dia: 'Sábado',
        min: 20,
        max: 31,
        estado: 'Soleado',
      },
      {
        dia: 'Domingo',
        min: 18,
        max: 26,
        estado: 'Lluvioso',
      },
    ],
  },
  {
    id: 2,
    nombre: 'Valparaíso',
    tempActual: 22,
    estadoActual: 'Nublado',
    pronosticoSemanal: [
      {
        dia: 'Lunes',
        min: 14,
        max: 22,
        estado: 'Nublado',
      },
      {
        dia: 'Martes',
        min: 15,
        max: 24,
        estado: 'Soleado',
      },
      {
        dia: 'Miércoles',
        min: 13,
        max: 20,
        estado: 'Lluvioso',
      },
      {
        dia: 'Jueves',
        min: 16,
        max: 23,
        estado: 'Parcialmente nublado',
      },
      {
        dia: 'Viernes',
        min: 14,
        max: 21,
        estado: 'Nublado',
      },
      {
        dia: 'Sábado',
        min: 17,
        max: 25,
        estado: 'Soleado',
      },
      {
        dia: 'Domingo',
        min: 15,
        max: 22,
        estado: 'Lluvioso',
      },
    ],
  },
  {
    id: 3,
    nombre: 'Concepción',
    tempActual: 18,
    estadoActual: 'Lluvioso',
    pronosticoSemanal: [
      {
        dia: 'Lunes',
        min: 12,
        max: 18,
        estado: 'Lluvioso',
      },
      {
        dia: 'Martes',
        min: 13,
        max: 19,
        estado: 'Nublado',
      },
      {
        dia: 'Miércoles',
        min: 11,
        max: 17,
        estado: 'Lluvioso',
      },
      {
        dia: 'Jueves',
        min: 14,
        max: 20,
        estado: 'Parcialmente nublado',
      },
      {
        dia: 'Viernes',
        min: 12,
        max: 18,
        estado: 'Lluvioso',
      },
      {
        dia: 'Sábado',
        min: 15,
        max: 21,
        estado: 'Soleado',
      },
      {
        dia: 'Domingo',
        min: 13,
        max: 19,
        estado: 'Nublado',
      },
    ],
  },
  {
    id: 4,
    nombre: 'La Serena',
    tempActual: 25,
    estadoActual: 'Parcialmente nublado',
    pronosticoSemanal: [
      {
        dia: 'Lunes',
        min: 15,
        max: 25,
        estado: 'Parcialmente nublado',
      },
      {
        dia: 'Martes',
        min: 16,
        max: 27,
        estado: 'Soleado',
      },
      {
        dia: 'Miércoles',
        min: 14,
        max: 24,
        estado: 'Nublado',
      },
      {
        dia: 'Jueves',
        min: 17,
        max: 26,
        estado: 'Soleado',
      },
      {
        dia: 'Viernes',
        min: 15,
        max: 23,
        estado: 'Parcialmente nublado',
      },
      {
        dia: 'Sábado',
        min: 16,
        max: 27,
        estado: 'Soleado',
      },
      {
        dia: 'Domingo',
        min: 14,
        max: 24,
        estado: 'Nublado',
      },
    ],
  },
  {
    id: 5,
    nombre: 'Puerto Montt',
    tempActual: 16,
    estadoActual: 'Lluvioso',
    pronosticoSemanal: [
      {
        dia: 'Lunes',
        min: 10,
        max: 16,
        estado: 'Lluvioso',
      },
      {
        dia: 'Martes',
        min: 11,
        max: 17,
        estado: 'Nublado',
      },
      {
        dia: 'Miércoles',
        min: 9,
        max: 15,
        estado: 'Lluvioso',
      },
      {
        dia: 'Jueves',
        min: 12,
        max: 18,
        estado: 'Parcialmente nublado',
      },
      {
        dia: 'Viernes',
        min: 10,
        max: 16,
        estado: 'Lluvioso',
      },
      {
        dia: 'Sábado',
        min: 13,
        max: 19,
        estado: 'Soleado',
      },
      {
        dia: 'Domingo',
        min: 11,
        max: 17,
        estado: 'Nublado',
      },
    ],
  },
];

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
const lugarEncontrado = lugares.find((lugar) => {
  console.log(`Buscando en array lugares el lugar con id: ${locationId}`);
  return lugar.id == locationId;
});
console.log(lugarEncontrado);

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
                  ICONOS[lugarEncontrado.estadoActual]
                }" style="font-size: 90px"></i>
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <h2 class="card-title">${lugarEncontrado.nombre}</h2>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">${
                      lugarEncontrado.estadoActual
                    }</li>
                    <li class="list-group-item">Temperatura: ${
                      lugarEncontrado.tempActual
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

// TODO: mostrar sección de pronóstico semanal

// TODO: mostrar estadísticas de la semana
