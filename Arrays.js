var nombres = ["lucas", "juan", "jose", "cachilo"] // el cero cuenta, osea lucas seria numero ceroo, juan numero 1, jose numero dos y asi...
console.log(nombres[2])

//llenar el array vacio conociendo el indice
var nombres = []
nombres[0] = "cachilo";
nombres[6] = "adolfo";

//Otra manera de llenar el array vaciio
var nombres = []
nombres.push("cahilolandia")
nombres.push("Josecito")
nombres.push("Raul")

//mostrar nombres de a uno con for
var nombres = []
nombres.push("cahilolandia")
nombres.push("Josecito")
nombres.push("Raul")

for (var i = 0; i < nombres.length; ++1) {
    var nombre = nombres[i];
    console.log(nombre);
}

//otra forma de hacer lo mismo pero mas corto
for (var nombre of nombres) {
    console.log(nombre);
}
//bucles con arrays
// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

/*El método push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.
// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

El método pop() elimina y devuelve el último elemento de un arreglo.
// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores);

El método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.

El método shift() elimina y devuelve el primer elemento de un arreglo.

El método includes() determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.
// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.
// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);

El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.
// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.
// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.
// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )


El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.
// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);
*/

//bucle while infinito
var aar = []
var n = 1;
while (n < 3) {
    arr.push(math.random())
}

//buclee while finitoo
// WHILE
var arr = [];
while (arr.length < 5) {
    arr.push('Camilo');
}
console.log(arr);

//bucle for finito 
// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let objeto = {
    "nombre": nombre,
    "edad": edad,
    "meow": () => {return "Meow!"},
 }