document.addEventListener("DOMContentLoaded", () => {
  function generarNumerosImpares() {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var arreglo = [];

    for (var i = min; i <= max; i++) {
      if (i % 2 !== 0) {
        arreglo.push(i);
      }
    }

    document.getElementById("resultado").innerHTML = "<p>Arreglo:</p>" + arreglo;
  }

  var btnGenerar = document.getElementById("btnGenerar");

  btnGenerar.onclick = generarNumerosImpares;
});
