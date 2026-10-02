/*

* =========================================================
* PORTAFOLIO DE FRANKO MENDOZA
* JavaScript
* =========================================================
  */

/* =========================================================
FORMULARIO DE CONTACTO
========================================================= */

const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", function (evento) {

```
// Evita que la página se recargue
evento.preventDefault();

const nombre = document.getElementById("nombre").value.trim();
const email = document.getElementById("email").value.trim();
const mensaje = document.getElementById("mensaje").value.trim();


// Comprobación básica
if (nombre === "" || email === "" || mensaje === "") {

    alert("Por favor, completa todos los campos.");

    return;
}


// Mensaje de confirmación
alert(
    "Gracias, " +
    nombre +
    ". Tu mensaje ha sido preparado correctamente."
);


// Limpia el formulario
formulario.reset();
```

});

/* =========================================================
ANIMACIÓN AL HACER SCROLL
========================================================= */

const elementos = document.querySelectorAll(
".proyecto, .habilidad, .sobre-contenido"
);

const observador = new IntersectionObserver(
function (entradas) {

```
    entradas.forEach(function (entrada) {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("visible");

        }

    });

},
{
    threshold: 0.15
}
```

);

elementos.forEach(function (elemento) {

```
observador.observe(elemento);
```

});
