import formatFloatNumber from '../utils/formatFloatNumber.js';
const API_KEY = 'a7eeff849cc84732968174325261401';

export default class WeatherApp {
  weather = []; // clima de las ciudades
  cityForecast = []; // pronostico de 7 dias de UNA ciudad
  #url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&aqi=no&lang=es`;
  #urlForecast = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=7&aqi=no&alerts=no&lang=es`;

  // Obtener datos del clima actual de las 5 ciudades
  async fetchWeather(lugares) {
    try {
      const promises = lugares.map(async (lugar) => {
        const response = await fetch(`${this.#url}&q=${lugar}`);
        return await response.json();
      });

      this.weather = await Promise.all(promises);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchWeatherByName(lugar) {
    try {
      const response = await fetch(`${this.#urlForecast}&q=${lugar}`);
      if (!response.ok) {
        throw new Error('No se pudo obtener el clima de la ciudad');
      }

      this.cityForecast = await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  // Para mostrar lugares en el index
  insertCardToDom(lugar, container) {
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

    container.innerHTML += tarjeta;
  }

  // Para mostrar pronostico en detalle.html
  mostrarLugar = (container) => {
    const content = `
          <div class="card mb-3">
            <div class="row g-0">
              <div
                class="col-lg-4 d-flex justify-content-center align-items-center"
              >
                <img src="${this.cityForecast.current.condition.icon}" class="card-image-top">
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <h2 class="card-title">${this.cityForecast.location.name}</h2>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">${
                      this.cityForecast.current.condition.text
                    }</li>
                    <li class="list-group-item">Temperatura: ${
                      this.cityForecast.current.temp_c
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

    container.innerHTML += content;
  };

  // Método que ejecuta petición a api y rellena el dom con respuesta de la api
  async renderWeather(lugares, container) {
    // Mostrar spinner de carga por cada lugar
    lugares.forEach((ciudad) => {
      container.innerHTML += `
        <div class="col">
          <div class="card h-100 text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Cargando...</span>
            </div>
          </div>
        </div>
      `;
    });
    try {
      await this.fetchWeather(lugares);
      container.innerHTML = '';

      // Mostrar lugares en el DOM
      this.weather.forEach((ciudad) => {
        // Funcion que inserta una card al DOM
        this.insertCardToDom(ciudad, container);
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  async renderForecast(lugar, container) {
    // Mostrar spinner de carga
    container.innerHTML = `
    <div class="d-flex justify-content-center my-4">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
    `;
    try {
      await this.fetchWeatherByName(lugar);
      container.innerHTML = '';
      this.mostrarLugar(container, this.cityForecast);
    } catch (error) {
      console.error(error);
    }
  }

  definirEstadoPredominante = (conteoEstados) => {
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

  estadisticasPronostico = () => {
    // 5.2.1 Obtener temperatura mínima semanal
    const temperaturasMinimas = this.cityForecast.forecast.forecastday.map(
      (dia) => dia.day.mintemp_c,
    );
    // console.log(temperaturasMinimas);
    const minimaSemanal = Math.min(...temperaturasMinimas);
    console.log(minimaSemanal);

    // 5.2.2 Obtener temperatura máxima semanal
    const temperaturasMaximas = this.cityForecast.forecast.forecastday.map(
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
    const estadosSemanal = this.cityForecast.forecast.forecastday.map(
      (dia) => dia.day.condition.text,
    );

    const estadosUnicos = [...new Set(estadosSemanal)];

    const conteoEstados = {};

    estadosUnicos.forEach((estado) => {
      conteoEstados[estado] = this.cityForecast.forecast.forecastday.filter(
        (dia) => dia.day.condition.text === estado,
      ).length;
    });

    // 5.2.5 Determinar estado predominante (el más frecuente) de la semana
    const estadoPredominante = this.definirEstadoPredominante(conteoEstados);

    return {
      minimaSemanal,
      maximaSemanal,
      promedioSemanal: formatFloatNumber(promedioSemanal),
      conteoEstados,
      estadoPredominante,
    };
  };
}
