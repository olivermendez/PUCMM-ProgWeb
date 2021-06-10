var text = document.getElementById("texti");
var result = document.getElementById("trac");
var form = document.getElementById("formi");

form.addEventListener("submit", function (persistencia) {
  //alert("funciona el js");

  var x = text.value;

  if (x === "mesa") {
    result.innerText = "table";
  } else if (x === "casa") {
    result.innerText = "house";
  } else if (x === "perro") {
    result.innerText = "dog";
  } else if (x === "gato") {
    result.innerText = "cat";
  }

  persistencia.preventDefault();
});
