# Proyecto de portafolio - Módulo 2

Desarrollar la primera versión del frontend de una aplicación de clima, aplicando **HTML5 semántico**, **Bootstrap** para estilos y **diseño responsivo**, y **JavaScript** básico para la interacción. El trabajo se versiona en **Git/GitHub** e incluye un **README** descriptivo.

---

## Aplicación del tiempo

Esta aplicación muestra el tiempo actual en 10 localidades.
Al hacer click en una de las localidades, te llevará a una vista de detalle mostrando el tiempo actual junto con un pronóstico para la siguiente semana.

## Requisitos funcionales

- Ejemplo de uso de JS 1: Navegación desde card

```js
cardLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    window.location.href = './detalle.html';
  });
});
```

- Ejemplo de uso de JS 2: Modificando clases dependiendo de la ubicación:

```js
links.forEach(function (link) {
  if (link.href === window.location.href) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
```

# Proyecto de portafolio - Módulo 4

## Requisitos técnicos

### Modelado de datos

[x] - Definir en JavaScript un arreglo de lugares donde cada lugar sea un objeto con al menos:
[x] - id, nombre, tempActual, estadoActual
[x] - pronosticoSemanal: arreglo de objetos (cada objeto será un día de la semana) con dia, min, max y estado

### Variables, condicionales, ciclos y funciones

- [x] Utilizar variables y constantes para guardar datos intermedios (suma de temperaturas, contadores, etc.).
- [ ] Utilizar ciclos (for, while o similar) para recorrer el pronóstico semanal y:
  - [x] Calcular mínimo, máximo y promedio:
  - [ ] Contar cuántos días hay de cada tipo de clima.
- [ ] Utilizar condicionales (if, else if, else) para:
  - [ ] Evaluar estados del tiempo (ej.: si hay más días soleados que nublados → “Semana mayormente soleada”).
  - [ ] Generar el resumen textual de la semana.
- [ ] Definir al menos dos funciones:
  - [x] Una función para buscar y obtener el objeto lugar a partir de un id o nombre.
  - [ ] Una función para calcular estadísticas a partir del pronosticoSemanal de un lugar y devolver un objeto con los resultados.
