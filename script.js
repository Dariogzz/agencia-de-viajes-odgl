function calcularTotal() {
  var vuelo = document.querySelector('input[name="vuelo"]:checked');
  var hospedaje = document.querySelector('input[name="hospedaje"]:checked');
  var adultos = document.getElementById("adultos").value;
  var menores = document.getElementById("menores").value;
  var dias = document.getElementById("dias-individual").value;

  if (vuelo == null || hospedaje == null || dias == "") {
    alert("Por favor llena todas las opciones antes de calcular.");
    return;
  }

  var precioAdulto = 865;
  var precioMenor = 437;
  var precioDia = 769;

  var total = 0;

  total = total + Number(vuelo.value);
  total = total + Number(hospedaje.value);
  total = total + (adultos * precioAdulto);
  total = total + (menores * precioMenor);
  total = total + (dias * precioDia);

  document.getElementById("totalIndividual").value = total + " MXN";

  var nombre = document.getElementById("nombre").value;
  var direccion = document.getElementById("direccion").value;
  var telefono = document.getElementById("telefono").value;
  var email = document.getElementById("email").value;

  alert(
    "Nombre: " + nombre +
    "\nDirección: " + direccion +
    "\nTeléfono: " + telefono +
    "\nEmail: " + email +
    "\nTotal a pagar: " + total + " MXN"
  );
}
