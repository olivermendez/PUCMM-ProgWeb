var num1 = document.getElementById("numero1");
var num2 = document.getElementById("numero2");
var num3 = document.getElementById("numero3");
var form = document.getElementById("formCalcularElMayor");
var result = document.getElementById("result");
var mayor = 0;

form.addEventListener("submit", function (persistencia) {
  //alert("funciona el js");

  if (!num1.value || !num2.value || !num3.value) {
    alert("Please enter values in the fields!");
  } else {
    var x = parseFloat(num1.value);
    var y = parseFloat(num2.value);
    var z = parseFloat(num3.value);

    mayor = Math.max(x, y, z);

    result.innerText = mayor;

    persistencia.preventDefault();
  }
});
