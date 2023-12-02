document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("enviarBtn").addEventListener("click", function() {
        enviarSolicitud();
    });
});
function enviarSolicitud() {
    console.log("hola")
    var cuit = $("#cuit").val();
    var nombre = $("#nombre").val();
    var telefono = $("#telefono").val();
    var categoria = $("#categoria").val();
    var tiempo = $("#tiempo").val();
    var formaPago = $("#formaPago").val();

    if (cuit === "" || nombre === "" || telefono === "" || categoria === "" || tiempo === "" || formaPago === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    

    var datos = {
        cuit: cuit,
        nombre: nombre,
        telefono: telefono,
        categoria: categoria,
        tiempo: tiempo,
        formaPago: formaPago,
    };

    $.ajax({
        type: "POST", 
        url: '/calcular',
        data: JSON.stringify(datos),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
                $('#respuestaPresupuesto').html('Presupuesto: ' + response.presupuesto);
        },
        error: function (error) {
            console.error(error);
            alert("Error al enviar la solicitud.");
        }
    });
}


