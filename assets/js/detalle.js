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

// TODO: mostrar sección de pronóstico semanal

// TODO: mostrar estadísticas de la semana
