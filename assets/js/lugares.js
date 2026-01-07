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

export default lugares;
