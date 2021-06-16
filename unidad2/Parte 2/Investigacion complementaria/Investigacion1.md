# Javascript no intrusivo (Unobtrusive JavaScript). ¿Qué es? y ¿en que se fundamenta?

Cuando estamos construyendo nuestras aplicaciones, una de las máximas que tenemos que tener siempre en mente es hacerlo de un forma lógica y desacoplada, para que estas, en un futuro, sean fácilmente mantenibles y escalables.

Para conseguir esto, por norma general, dividimos nuestras aplicaciones en capas, y en cada una de ellas vamos insertando la funcionalidad de la aplicación.

Trabajar con capas (no me voy a extender mucho en esto), es totalmente beneficioso, ya que nos vamos a encontrar principalmente con:

Código desacoplado.
Código escalable.
Código mantenible.

Y si en el futuro nos vemos en la tesitura, de modificar nuestra app, no vamos a tener que modificar toda la aplicación si no simplemente la capa necesaria.

Bien, cuando trabajamos con la interfaz de usuario, tenemos que hacer lo mismo y ya no simplemente por beneficiarnos de un código desacoplado, escalable y mantenible si no también porque si entendemos documento Web, como un documento que nos permite difundir información (y además que tiene que ser accesible), en esta información no se ha de contemplar asuntos como el look & feel de la página o la funcionalidad cliente.

En el principio de los tiempos, las páginas web, estaban creadas de manera que eran ellas las que definían la estructura del sitio y la información a mostrar, el look & feel de la página (quien no se acuerda de los tag Font), y la funcionalidad cliente. Con el paso del tiempo, han aparecido las hojas de estilo, con lo cual nos han permitido separar (o casi en algunos casos) el look & feel de un sitio web del contenido (si no te crees esto puedes darte una vuelta por css zen garden), pero ¿qué pasa con la funcionalidad cliente?.

## ¿Qué es el Javascript no intrusivo? y ¿en que se fundamenta?

El Javascript no intrusivo, se fundamenta en lo hablado anteriormente, es decir, en separar la funcionalidad cliente de una página del contenido, ya que a fin de cuentas un documento HTML, no es otra cosa que un documento que nos permite difundir información en un medio (si no, preguntádselo a google) de manera que este, tiene que gozar de una estructura de marcación que nos permita conseguir ese fin.

Sí que es verdad, que en la medida de lo posible, nuestras páginas han de ser usables siempre, y es ahí donde aparece Javascript ya que en la mayoría de casos, es para lo que lo vamos a emplear.

Así pues, el Javascript no intrusivo, es aquel que está totalmente separado de la información-estructura sintáctica del sitio (nótese que no hablo de una separación física entre archivos).

Y el Javascript intrusivo, es aquel que está mezclado con la información – estructura sintáctica de la página, considerándose como tal cualquier expresión de Javascript o sentencias ubicadas en el <body> de nuestra página ya sean como atributos de un elemento o bloques de código.

Si vemos el siguiente código, seguramente nos va a resultar familiar:

<input type=”button” id=”btn” value=”pulsa aquí” onclick=”helloWorld();” />

Pues si amigos, lo habéis adivinado, esto es javascript intrusivo, ya que como atributo del input, estamos suscribiendo un evento.

Veamos ahora como conseguir esto mismo, pero por medio un Javascript no intrusivo:

<input type=”button” id=”btn” value=”pulsa aquí” />

Y en head (o en un archivo js externo) pondríamos el código del onclick de la siguiente forma:

<head>
<script language=”javascript” type=”text/javascript”>
window.onload = function()
{
document.getElementById(“btn”).onclick = helloWorld;
}
function helloWorld()
{
alert(“hola”);
}
</script>
</head>

Supongo que estaréis pensando que esto va a ser mucho más costoso ya que tendremos que escribir más líneas de código y seguramente tenéis razón, pero eso si, por el contra vamos a poder aplicar una serie de buenas prácticas a nuestro código cliente de manera que después nos va a resultar más sencillo trabajar.

Referencia: https://adeshoras.wordpress.com/2008/10/24/javascript-no-intrusivo-unobtrusive-javascript-¿que-es-y-¿en-que-se-fundamenta/
