//La idea sigue siendo la misma, un emisor de turnos que luego permita ordenarlos de alguna manera, por el momento es alfabeticamente segun nombre. 
//Se agrego una validacion para la emision de turnos ante campos vacios o nulos, segun la correccion de la entrega anterior.
//Quizas para las proximas entregas modifique el proyecto entero.


// Solicitar validación de usuario
let usuarioValido = prompt("¡Hola! Por favor, ingrese su nombre para validar: (user: secretaria)");

// Validar el nombre del usuario (usuario "secretaria")
if (usuarioValido && usuarioValido.toLowerCase() === "secretaria") {
    alert("¡Bienvenida, Secretaria! Estás validada para emitir turnos.");
    
    // Inicializamos variables
    let listaTurnos = [];
    let tiempoEsperaTotal = 25;

    // Función para calcular el tiempo de espera en minutos
    function calcularTiempoEspera(turnoActual) {
        return turnoActual * 5; // Tiempo entre turnos 5´
    }

    // Función para reordenar los turnos alfabéticamente
    function reordenarTurnos(turnos) {
        return turnos.sort();
    }

    // Ciclo interactivo para emitir CINCO turnos
    for (let i = 1; i <= 5; i++) {
        let nuevoTurno = prompt(`Ingrese el nombre del paciente para el turno #${i}`);

        // Validar nombre no vacío y no nulo
        while (!nuevoTurno) {
            nuevoTurno = prompt("Por favor, ingrese un nombre válido para el turno #" + i);
        }

        listaTurnos.push({ numero: i, nombre: nuevoTurno, tiempoEspera: calcularTiempoEspera(i) });

        // Mostrar alerta con el turno y tiempo de espera
        alert("Turno emitido: " + nuevoTurno + "\nTiempo de espera: " + calcularTiempoEspera(i) + " minutos");
    }

    // Reordenar los turnos alfabéticamente por el nombre
    listaTurnos.sort((a, b) => a.nombre.localeCompare(b.nombre));

    // Función de orden superior para mostrar información de los turnos
    function mostrarInformacionTurnos(turno, indice) {
        alert(`Turno #${turno.numero}: ${turno.nombre}\nTiempo de espera: ${turno.tiempoEspera} minutos`);
    }

    // Mostrar información de los turnos utilizando la función de orden superior
    listaTurnos.forEach(mostrarInformacionTurnos);

    // Mostrar resumen al final
    alert(`Resumen:\nTurnos emitidos: ${listaTurnos.map(turno => turno.nombre).join(", ")}\nTiempo de espera total: ${tiempoEsperaTotal} minutos`);

} else {
    // Si el nombre no es válido, mostrar un mensaje de error
    alert("Usuario no válido. Acceso denegado.");
}
