// import lugares from './lugares.js';
import lugaresJson from '../../lugares-api.json' with { type: 'json' };

const lugaresContainer = document.getElementById('lugares');

class WeatherApp {
  weather = [];

  constructor(lugares) {
    // Representa todos los lugares que queramos mostrar en la app
    this.lugares = lugares;
  }

  // Obtener datos del clima actual de las 5 ciudades
  fetchWeather() {
    this.weather = lugaresJson;
  }

  // Para mostrar lugares en el index
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

  // Método que ejecuta petición a api y rellena el dom con respuesta de la api
  renderWeather() {
    this.fetchWeather();
    this.weather.forEach((ciudad) => {
      this.insertCardToDom(ciudad);
    });
  }
}

// Instancia de clase weatherapp
const app = new WeatherApp([
  'Santiago',
  'Arica',
  'Puerto Natales',
  'Concepción',
  'Talcahuano',
  'Temuco',
]);

// Ejecuta método principal de la clase
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
