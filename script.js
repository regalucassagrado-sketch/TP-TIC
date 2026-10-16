// ==================================================
// SCRIPT.JS - REGA-LUCAS-TP_3
// Punto 5: Fecha automatica en el footer
// Punto 2: Contador de carrito
// ==================================================

// ---------- PUNTO 5: FECHA Y MENSAJE DE HORARIO ----------

// 1. SELECCIONAR el parrafo del footer
const elementoFecha = document.getElementById("fecha-actual");

if (elementoFecha) {

    const hoy = new Date();

    // --- Parte 1: la fecha en español (como ya teniamos) ---
    const opciones = {
        weekday: "long",   // "jueves"
        day: "numeric",    // "16"
        month: "long",     // "octubre"
        year: "numeric"    // "2026"
    };
    const fechaTexto = hoy.toLocaleDateString("es-AR", opciones);

    // --- Parte 2: averiguar que dia de la semana es hoy ---
    // getDay() devuelve un NUMERO, no el nombre:
    // 0 = domingo, 1 = lunes, 2 = martes ... 6 = sabado
    const diaSemana = hoy.getDay();

        const hora = hoy.getHours(); // devuelve 0 a 23

    let mensaje;

    if (diaSemana === 0) {
        mensaje = "Los domingos estamos cerrados. Abrimos de lunes a sábado de 9 a 21 hs.";
    } else if (hora >= 9 && hora < 21) {
        // Dia habil, dentro del horario de atencion
        mensaje = "¡Estamos abiertos ahora mismo! Podés comprar hasta las 21 hs.";
    } else {
        // Dia habil, pero fuera de horario
        mensaje = "Ahora estamos cerrados. Abrimos de lunes a sábado de 9 a 21 hs.";
    }

    // --- Parte 4: escribir todo junto en el footer ---
    elementoFecha.textContent = "Hoy es " + fechaTexto + ". " + mensaje;
}

// ---------- PUNTO 2: CARRITO ----------

// Recupera el numero guardado de antes (si existe).
// localStorage es la "memoria" del navegador: guarda
// el valor aunque pases de gorras.html a remera.html
let carrito = Number(localStorage.getItem("carrito")) || 0;

// Selecciona el contador del navbar
const contadorCarrito = document.getElementById("contador-carrito");

// Muestra el numero actualizado en pantalla
function actualizarContador() {
    if (contadorCarrito) {
        contadorCarrito.textContent = "Carrito: " + carrito;
    }
}

// Selecciona TODOS los botones "Agregar al carrito"
// que haya en la pagina (uno por producto)
const botones = document.querySelectorAll(".boton-carrito");

// A cada boton le "engancha" la accion de click
botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        carrito = carrito + 1;                        // suma 1
        localStorage.setItem("carrito", carrito);     // guarda
        actualizarContador();                         // actualiza pantalla
        alert("Producto agregado al carrito");        // aviso al usuario
    });
});

// Al abrir la pagina, muestra el valor recuperado
actualizarContador();

