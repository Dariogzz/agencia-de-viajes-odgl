var formulario = document.getElementById("calcularPrecio");

function calcular() {

    var total = 0;
    var cantidad = document.getElementById("cantidad").value;

    // tamaño
    var value = formulario.tam.value;
    if (value == "Sin Avion") {
        total = 100;
    } else if (value == "ida") {
        total = 150;
    } else if (value == "ida y vuelta") {
        total = 200;
    }

}