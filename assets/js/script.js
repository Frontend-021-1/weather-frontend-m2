// import lugares from './lugares.js';
import lugaresJson from '../../lugares-api.json' with { type: 'json' };

const lugaresContainer = document.getElementById('lugares');

class WeatherApp {
  weather = [];

  constructor(lugares) {
    this.lugares = lugares;
  }

  fetchWeather() {
    this.weather = lugaresJson;
  }

  insertCardToDom(lugar) {
    console.log(lugar);
    const tarjeta = `
        <div class="col">
          <div class="card h-100 text-center">
            <img src="${lugar.current.condition.icon}" class="card-image-top" >
            <div class="card-body">
              <h5 class="card-title">${lugar.location.name}</h5>
              <p class="card-text">${lugar.current.temp_c}°C</p>
              <p class="card-text">${lugar.current.condition.text}</p>
            </div>
            <div class="card-footer bg-transparent border-0">
              <a class="card-link" href="./detalle.html?name=${
                lugar.location.name
              }">Ver detalle</a>
            </div>
          </div>
        </div>
    `;

    lugaresContainer.innerHTML += tarjeta;
  }

  renderWeather() {
    this.fetchWeather();
    this.weather.forEach((ciudad) => {
      this.insertCardToDom(ciudad);
    });
  }
}

const app = new WeatherApp([
  'Santiago',
  'Arica',
  'Puerto Natales',
  'Concepción',
  'Talcahuano',
  'Temuco',
]);

app.renderWeather();

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
// var cardLinks = document.querySelectorAll('.card-link');
// // console.log(cardLinks);
// cardLinks.forEach(function (link) {
//   link.addEventListener('click', function () {
//     window.location.href = './detalle.html';
//   });
// });

// Para agregar ícono dinámicamente dependiendo del estado actual del clima
// const ICONOS = {
//   Soleado: 'bi-brightness-high',
//   Nublado: 'bi-cloudy-fill',
//   Lluvioso: 'bi-cloud-rain-heavy',
//   'Parcialmente nublado': 'bi-cloud-sun',
// };

// Mostrar lugares en el Index

// const mostrarLugares = () => {
//   lugares.forEach((lugar) => {
//     const tarjeta = `
//         <div class="col">
//           <div class="card h-100 text-center">
//             <i class="bi ${ICONOS[lugar.estadoActual]} card__icon"></i>
//             <div class="card-body">
//               <h5 class="card-title">${lugar.nombre}</h5>
//               <p class="card-text">${lugar.tempActual}°C</p>
//               <p class="card-text">${lugar.estadoActual}</p>
//             </div>
//             <div class="card-footer bg-transparent border-0">
//               <a class="card-link" href="./detalle.html?id=${
//                 lugar.id
//               }">Ver detalle</a>
//             </div>
//           </div>
//         </div>
//     `;

//     lugaresContainer.innerHTML += tarjeta;
//   });
// };

// mostrarLugares();
