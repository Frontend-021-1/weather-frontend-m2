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
        min: 18,
        max: 28,
        estado: 'Soleado',
      },
      {
        dia: 'Martes',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Miércoles',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Jueves',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Viernes',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Sábado',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Domingo',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
    ],
  },
  {
    id: 2,
    nombre: 'Viña del Mar',
    tempActual: 25,
    estadoActual: 'Soleado',
    pronosticoSemanal: [
      {
        dia: 'Lunes',
        min: 18,
        max: 28,
        estado: 'Soleado',
      },
      {
        dia: 'Martes',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Miércoles',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Jueves',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Viernes',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Sábado',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Domingo',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
    ],
  },
  {
    id: 3,
    nombre: 'Valparaíso',
    tempActual: 24,
    estadoActual: 'Soleado',
    pronosticoSemanal: [
      {
        dia: 'Lunes',
        min: 18,
        max: 28,
        estado: 'Soleado',
      },
      {
        dia: 'Martes',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Miércoles',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Jueves',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Viernes',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Sábado',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Domingo',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
    ],
  },
  {
    id: 4,
    nombre: 'Punta Arenas',
    tempActual: 15,
    estadoActual: 'Nublado',
    pronosticoSemanal: [
      {
        dia: 'Lunes',
        min: 18,
        max: 28,
        estado: 'Nublado',
      },
      {
        dia: 'Martes',
        min: 17,
        max: 29,
        estado: 'Nublado',
      },
      {
        dia: 'Miércoles',
        min: 17,
        max: 29,
        estado: 'Nublado',
      },
      {
        dia: 'Jueves',
        min: 17,
        max: 29,
        estado: 'Nublado',
      },
      {
        dia: 'Viernes',
        min: 17,
        max: 29,
        estado: 'Nublado',
      },
      {
        dia: 'Sábado',
        min: 17,
        max: 29,
        estado: 'Nublado',
      },
      {
        dia: 'Domingo',
        min: 17,
        max: 29,
        estado: 'Nublado',
      },
    ],
  },
  {
    id: 5,
    nombre: 'Arica',
    tempActual: 27,
    estadoActual: 'Soleado',
    pronosticoSemanal: [
      {
        dia: 'Lunes',
        min: 18,
        max: 28,
        estado: 'Soleado',
      },
      {
        dia: 'Martes',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Miércoles',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Jueves',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Viernes',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Sábado',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Domingo',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
    ],
  },
];

// TODO: hacer sumas de temperaturas, promedios, mínimos y máximos
