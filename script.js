const elementoFecha = document.getElementById("fecha-actual");

if (elementoFecha) {
    const hoy = new Date();
    const opciones = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    const fechaTexto = hoy.toLocaleDateString("es-AR", opciones);
    const diaSemana = hoy.getDay();
    const hora = hoy.getHours();
    let mensaje;

    if (diaSemana === 0) {
        mensaje = "Los domingos estamos cerrados. Abrimos de lunes a sábado de 9 a 21 hs.";
    } else if (hora >= 9 && hora < 21) {
        mensaje = "¡Estamos abiertos ahora mismo! Podés comprar hasta las 21 hs.";
    } else {
        mensaje = "Ahora estamos cerrados. Abrimos de lunes a sábado de 9 a 21 hs.";
    }

    elementoFecha.textContent = "Hoy es " + fechaTexto + ". " + mensaje;
}


const form = document.getElementById("registroForm");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let valido = true;
        const dni = document.getElementById("DNI").value;
        if (!/^\d+$/.test(dni)) {
            mostrarError("err-DNI", "El DNI debe tener solo números");
            valido = false;
        }
        const p1 = document.getElementById("password").value;
        const p2 = document.getElementById("confirmPassword").value;
        if (p1 !== p2) {
            mostrarError("err-password", "Las contraseñas no coinciden");
            valido = false;
        }
        if (valido) {
            alert("Formulario enviado correctamente");
            window.location.href = "inicio.html";
        }
    });
}

function mostrarError(id, msg) {
    document.getElementById(id).textContent = msg;
    document.getElementById(id).style.color = "red";
}

document.querySelectorAll(".toggle-pass").forEach(btn => {
    btn.addEventListener("click", function() {
        const input = document.getElementById(this.dataset.target);
        const tipo = input.type === "password" ? "text" : "password";
        input.type = tipo;
        this.textContent = tipo === "password" ? "👁️" : "🙈";
    });
});

const btnTop = document.getElementById("btn-top");
if (btnTop) {
    window.addEventListener("scroll", () => {
        btnTop.style.display = window.scrollY > 300 ? "block" : "none";
    });
    btnTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
