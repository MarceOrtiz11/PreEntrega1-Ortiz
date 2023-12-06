// Mi idea es armar un sistema para emitir turnos en un Consultorio Medico

// Solicitar validación de usuario
let usuarioValido = prompt("¡Hola! Por favor, ingrese su usuario: (user: tutor coder)");

// Validar el nombre del usuario (se puede cambiar "tutor" por un nombre)
if (usuarioValido && usuarioValido.toLowerCase() === "tutor coder") {
    alert("¡Bienvenido, Tutor Coder! Estás validado para emitir turnos.");
    
    // Inicializamos variables
    let listaTurnos = [];
    let tiempoEsperaTotal = 0;

    // Función para calcular el tiempo de espera en minutos
    function calcularTiempoEspera(turnoActual) {
        return turnoActual * 5; // Se puso 5´como tiempo estimado de demora
    }

    // Ciclo interactivo para emitir hasta CINCO turnos
    for (let i = 1; i <= 5; i++) {
        let nuevoTurno = prompt("Ingrese el nombre del cliente para el turno #" + i);
        listaTurnos.push(nuevoTurno);

        // Alerta con el turno y tiempo de espera
        alert(`Turno emitido: ${nuevoTurno}\nTiempo de espera: ${calcularTiempoEspera(i)} minutos`);

        // Suma al tiempo de espera total
        tiempoEsperaTotal += calcularTiempoEspera(i);
    }

    // Muestra resumen al final para dar una idea de cierre del algoritmo
    alert(`Resumen:\nTurnos emitidos: ${listaTurnos.join(", ")}\nTiempo de espera total: ${tiempoEsperaTotal} minutos`);

} else {
    // Si el nombre no es válido, muestra un mensaje de error
    alert("Usuario no válido. Acceso denegado.");
}