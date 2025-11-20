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
