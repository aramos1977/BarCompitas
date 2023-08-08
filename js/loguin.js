// Array para almacenar las citas
var index = [];

// Función para mostrar las citas en la tabla
function mostrarIndex() {
  var table = document.getElementById("index-table");
  table.innerHTML = "<tr><th>Fecha</th><th>Hora</th><th>Paciente</th><th>Doctor</th><th>Acciones</th></tr>";
  
  for (var i = 0; i < index.length; i++) {
    var index = index[i];
    var row = `<tr>
                <td>${index.nombre}</td>
                <td>${index.apellido}</td>
                <td>${index.cedula}</td>
                <td>${index.edad}</td>
                <td>${index.celular}</td>
                <td>
                  <button onclick="editarIndex(${i})">Editar</button>
                  <button onclick="eliminarIndex(${i})">Eliminar</button>
                </td>
              </tr>`;
    table.innerHTML += row;
  }
}

// Función para agregar una nueva cita
function agregarCita() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var cedula = document.getElementById("cedula").value;
  var edad = document.getElementById("edad").value;
  var Celular = document.getElementById("celular").value;


  var index = {
    nombre: nombre,
    apellido: apellido,
    cedula: cedula,
    edad: edad,
    celular: celular
  };

  citas.push(cita);
  mostrarCitas();
  limpiarFormulario();
}

// Función para editar una cita existente
function editarCita(index) {
  var cita = citas[index];
  document.getElementById("fecha").value = cita.fecha;
  document.getElementById("hora").value = cita.hora;
  document.getElementById("paciente").value = cita.paciente;
  document.getElementById("doctor").value = cita.doctor;

  // Eliminar la cita del array
  citas.splice(index, 1);
  mostrarCitas();
}

// Función para eliminar una cita existente
function eliminarCita(index) {
  citas.splice(index, 1);
  mostrarCitas();
}

// Función para limpiar los campos del formulario
function limpiarFormulario() {
  document.getElementById("fecha").value = "";
  document.getElementById("hora").value = "";
  document.getElementById("paciente").value = "";
  document.getElementById("doctor").value = "";
}

// Event listener para el formulario de citas
document.getElementById("cita-form").addEventListener("submit", function(e) {
  e.preventDefault();
  agregarCita();
});
