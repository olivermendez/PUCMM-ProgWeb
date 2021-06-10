var num1 = document.getElementById("numero1");
var num2 = document.getElementById("numero2");
var form = document.getElementById("calculador");

//si X s mayor
var suma = document.getElementById("suma");
var dif = document.getElementById("dif");

//si Y s mayor
var mult = document.getElementById("mult");
var div = document.getElementById("div");

form.addEventListener("submit", function (persistencia) {
  //alert("funciona el js");
  var x = parseFloat(num1.value);
  var y = parseFloat(num2.value);

  if (x > y) {
    suma.innerText = x + y;
    dif.innerText = x - y;
  } else {
    mult.innerText = x * y;
    div.innerText = x / y;
  }

  persistencia.preventDefault();
});
