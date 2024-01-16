//La idea sigue siendo desarrollar un Emisor de Turnos para un Consultorio Medico

const listaTurnos = document.getElementById('listaTurnos');
const turnoForm = document.getElementById('turnoForm');
const infoDemora = document.getElementById('infoDemora');
const infoTurnos = document.getElementById('infoTurnos');
const infoDemoraTotal = document.getElementById('infoDemoraTotal');

let turnos = []; // Array para almacenar los turnos
let demoraTotal = 0;
let intervaloDemora; // Variable para almacenar el intervalo de demora

function agregarTurno() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const esPacientePrevio = document.getElementById('esPacientePrevio').checked;

    const turno = {
        nombre,
        apellido,
        telefono,
        esPacientePrevio,
    };

    turnos.push(turno);
    localStorage.setItem('turnos', JSON.stringify(turnos));
    turnoForm.reset();
    actualizarListaTurnos();
    reiniciarIntervaloDemora();
    mostrarInformacion();
    mostrarMensajeExito();
};

function reiniciarIntervaloDemora() {
    clearInterval(intervaloDemora);
    // Simulación de demora entre turnos solo para probar
    intervaloDemora = setInterval(() => {
    demoraTotal += 5; // Incrementar demora cada 5 minutos
    mostrarInformacion();
    }, 5000); // Cada 5 segundos para propósitos de prueba, esto se puede ajustar segun requerimiento del profesional
};

function actualizarListaTurnos() {
    listaTurnos.innerHTML = '';

    // Recuperar los turnos almacenados
    const turnosGuardados = JSON.parse(localStorage.getItem('turnos')) || [];

    for (const turno of turnosGuardados) {
        const listItem = document.createElement('li');
        listItem.textContent = `${turno.nombre} ${turno.apellido} - Teléfono: ${turno.telefono} - ¿Paciente previo? ${turno.esPacientePrevio ? 'Sí' : 'No'}`;
        listaTurnos.appendChild(listItem);
    }
};

function limpiarDatos() {
    localStorage.removeItem('turnos');
    turnos = [];
    demoraTotal = 0;
    mostrarInformacion();
    actualizarListaTurnos();
};

function esperarDemora() {
    // Simulación de demora entre turnos
    const intervaloDemora = 5 * 60 * 1000; // 5 minutos en milisegundos

    setInterval(() => {
    demoraTotal += intervaloDemora;
    mostrarInformacion();
    }, intervaloDemora);
};

function mostrarInformacion() {
    const cantidadTurnos = turnos.length;
    infoTurnos.textContent = `Turnos emitidos: ${cantidadTurnos}`;
    const minutosDemora = demoraTotal;
    infoDemoraTotal.textContent = `Demora total acumulada: ${minutosDemora.toFixed(2)} minutos`;
};

// Función para mostrar un mensaje de éxito con Sweet Alert
function mostrarMensajeExito() {
    Swal.fire({
        icon: 'success',
        title: 'Turno Agregado con Éxito',
        showConfirmButton: false,
        timer: 2000  // 2 segundos
    });
};

// Limpiar datos al cargar la página
window.onload = function() {
limpiarDatos();
};