var num = document.getElementById("numero1");
var form = document.getElementById("form");
var result = document.getElementById("result");

form.addEventListener("submit", function (persistencia) {
  var n = num.value;
  var tostring = toString(n);

  for (var i = 0; i < tostring.length; i++) {
    result.innerText = tostring.length;
  }

  // TODO: averiguar como obtener el contador

  //result.innerText = n;
  persistencia.preventDefault();
});
