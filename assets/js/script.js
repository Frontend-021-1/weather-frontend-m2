import lugares from './lugares.js';

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

// Manejo de Evento
var cardLinks = document.querySelectorAll('.card-link');
// console.log(cardLinks);
cardLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    window.location.href = './detalle.html';
  });
});

// Para agregar ícono dinámicamente dependiendo del estado actual del clima
const ICONOS = {
  Soleado: 'bi-brightness-high',
  Nublado: 'bi-cloudy-fill',
  Lluvioso: 'bi-cloud-rain-heavy',
  'Parcialmente nublado': 'bi-cloud-sun',
};

// Mostrar lugares en el Index
const lugaresContainer = document.getElementById('lugares');

const mostrarLugares = () => {
  lugares.forEach((lugar) => {
    const tarjeta = `
        <div class="col">
          <div class="card text-center">
            <i class="bi ${ICONOS[lugar.estadoActual]} card__icon"></i>
            <div class="card-body">
              <h5 class="card-title">${lugar.nombre}</h5>
              <p class="card-text">${lugar.tempActual}°C</p>
              <p class="card-text">${lugar.estadoActual}</p>
            </div>
            <div class="card-body">
              <a class="card-link" href="/detalle.html?id=${
                lugar.id
              }">Ver detalle</a>
            </div>
          </div>
        </div>
    `;

    lugaresContainer.innerHTML += tarjeta;
  });
};

mostrarLugares();
// console.log(lugares);
// TODO: hacer sumas de temperaturas, promedios, mínimos y máximos
