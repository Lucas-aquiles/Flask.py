
    function mostrarDatos() {
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var edad = document.getElementById("edad").value;
        var domicilio = document.getElementById("domicilio").value;
        var sexo = document.querySelector('input[name="sexo"]:checked');
        var provincia = document.getElementById("provincia").value;

        if (!esTextoValido(nombre) || !esTextoValido(apellido) || !esNumeroValido(edad) || !esTextoValido(domicilio) || !sexo || !provincia) {
            alert("Por favor, complete todos los campos correctamente.");
            return;
        }

        var informacion = "Nombre: " + nombre + "\n";
        informacion += "Apellido: " + apellido + "\n";
        informacion += "Edad: " + edad + "\n";
        informacion += "Domicilio: " + domicilio + "\n";
        informacion += "Sexo: " + sexo.value + "\n";
        informacion += "Provincia: " + provincia;

        document.getElementById("informacion").value = informacion;
    }

    function esTextoValido(texto) {
        return /^[A-Za-z\s]+$/.test(texto);
    }

    function esNumeroValido(numero) {
        return !isNaN(numero);
    }

