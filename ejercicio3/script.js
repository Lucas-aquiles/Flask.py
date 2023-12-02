function mostrarDatos() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var dni = document.getElementById("dni").value;
  var domicilio = document.getElementById("domicilio").value;
  var materia = document.getElementById("materia").value;
  var nota = document.getElementById("nota").value;

  if (
    !esTextoValido(nombre) ||
    !esTextoValido(apellido) ||
    !esNumeroValido(dni) ||
    !domicilio
  ) {
    alert("Por favor, complete todos los campos correctamente.");
    return;
  }

  var informacion = "Nombre: " + nombre + "\n";
  informacion += "Apellido: " + apellido + "\n";
  informacion += "Dni: " + dni + "\n";
  informacion += "Domicilio: " + domicilio + "\n";

  document.getElementById("informacion").value = informacion;
}

function esTextoValido(texto) {
  return /^[A-Za-z\s]+$/.test(texto);
}

function esNumeroValido(numero) {
  return !isNaN(numero);
}


function mostrarMateria() {
    var materiaInput = document.getElementById("materia");
    var notaInput = document.getElementById("nota");

    var materia = materiaInput.value.trim();
    var nota = notaInput.value.trim();

    if (!esTextoValido(materia) || !esNumeroValido(nota)) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    var materiaInfo = {
        materia: materia,
        nota: parseFloat(nota)  // Convertir la nota a un número flotante
    };

    notas.push(materiaInfo);
    actualizarInfMaterias();
    actualizarPromedio();
    
    // Limpiar los campos de entrada
    materiaInput.value = "";
    notaInput.value = "";
}

function actualizarInfMaterias() {
    var infMateriasTextarea = document.getElementById("infMaterias");

    var informacion = notas.map(function (materia) {
        return "Materia: " + materia.materia + ", Nota: " + materia.nota;
    }).join("\n");

    infMateriasTextarea.value = informacion;
}

function actualizarPromedio() {
    var promedioSpan = document.getElementById("promedio");

    if (notas.length === 0) {
        promedioSpan.textContent = "Promedio: N/A";
        return;
    }

    var totalNotas = notas.reduce(function (sum, materia) {
        return sum + materia.nota;
    }, 0);

    var promedio = totalNotas / notas.length;
    promedioSpan.textContent = "Promedio: " + promedio.toFixed(2);  // Redondear a 2 decimales
}

// Ejemplo de cómo puedes usar estas funciones
var notas = [];


var butonAlumno = document.getElementById("btAlumno");
butonAlumno.onclick = mostrarDatos;
var btNota = document.getElementById("btNota");
btNota.onclick = mostrarMateria;
