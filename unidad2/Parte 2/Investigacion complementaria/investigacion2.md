# ¿Qué diferencias existen entre null y undefined en JavaScript?

Tanto null como undefined en JavaScript son valores bastante extraños, sobre todo para los principiantes. Ambos sirven para algo muy parecido, que es indicar la ausencia de valor. Lo que ocurre es que undefined es un valor que denota que no hay valor porque no se ha definido todavía, mientras que null se usa para indicar que no hay valor porque así lo hemos querido indicar expresamente. Pero en ambos casos el significado último de "ausencia de valor" es el mismo. Sin embargo ¿en qué se diferencian?

Cuando declaras una variable sin inicializarla, así:

var miVariable;console.log(miVariable);

Verás por consola su valor, que es undefined, que quiere decir que la variable está declarada pero no se ha definido aún su valor.

Sin embargo imagina que ya has utilizado una determinada variable y no quieres utilizarla más, o que tienes asignada una referencia a un objeto pero ya no lo necesitas o que, directamente, quieres tener la variable declarada pero inicializarla con un valor que todavía no sabes qué va a ser exactamente. En todos estos casos lo suyo es asignarle un valor nulo:

var miVariable = null;console.log(miVariable);

que en este caso mostrará el valor null por consola.

Ambos valores son valores de tipo "falsoso", es decir, que actúan como false en las comparaciones. También ambos son tipos básicos de JavaScript, es decir, tipos primitivos como los números o las cadenas, parte intrínseca del lenguaje.

Una cosa curiosa de su uso es la comparación entre ambos valores. Precisamente por las particularidades que tienen, JavaScript a veces tiene que tratar estos dos tipos de manera especial también. Si haces una comparación no estricta entre ellos (con ==), como ambos significan la ausencia de valor, la comparación devuelve un true:
