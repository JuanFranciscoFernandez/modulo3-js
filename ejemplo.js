// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

// }

// let persona1 = new Persona('Cachilo', 27);

// let persona2 = new Persona('Jorgita, alias la orejuda', 65)

// Persona.prototype.saludar = function () {
//     console.log('Hola, mi nombre es ', this.nombre, 'tengo ', this.edad, 'años')
// }
// Persona.prototype.diceputeadas = function () {
//     console.log('Que miras bobo? ', 'anda pa alla')
// }

// persona1.saludar()
// persona2.saludar()
// persona1.diceputeadas()


// //Extencion de clases
// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     saludar() {
//         console.log('Hola, mi nombre es ' + this.nombre + '. tengo ' + this.edad);
//     }
// }
// class Programador extends Persona {
//     constructor(nombre, edad, aniosDeExperiencia) {
//         super(nombre, edad);
//         this.aniosDeExperiencia = aniosDeExperiencia;
//     }
//     codear() {
//         console.log('Soy ' + this.nombre + ' . Codeo desde hace ' + this.aniosDeExperiencia + ' anios.')
//     }

// }


// var martin = new Persona('GUADA', 26);
// var programador = new Programador('julian', 37, 4);
// martin.saludar();
// programador.codear();
// programador.saludar()

// //ejercicio


// let num = 14;
// let array = [2, 4, 7, 98, 56, 74, 14, 15]
// function encuentraNumMayor(array, num) {
//     let arraynew = [];
//     for (let i = 0; i > array.length; i++) {
//         if (array[i] > num) { arraynew.push(array[i]) }
//     }
//     console.log(arraynew)
// }


// encuentraNumMayor(array, num);
// function deObjetoAarray(objeto) {
// Recibes un objeto. Tendrás que crear un arreglo de arreglos.
// Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
// Estos elementos debe ser cada par clave:valor del objeto recibido.
// [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
// Tu código:

//https://www.youtube.com/watch?v=VX-AyFo4yHE&ab_channel=Desarrollo%C3%9Atil

//     let array = Object.entries(objeto);
//     console.log(array);

// }
// let ejempo = { puto: 'chele', cachilo: 'futuroProProgramador' }

// deObjetoAarray(ejempo);




function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let enComun = array1.filter(element => array2.includes(element));
   console.log(enComun);
   // Creamos una caja nueva llamada enComun. Esta caja estará vacía al principio, pero la usaremos para guardar los números que están en ambas cajas.

   // Ahora vamos a revisar cada número en la primera caja (array1). Para hacer esto, usamos una herramienta especial llamada filter(). Esta herramienta revisa cada número y decide si lo queremos o no.
   
   // Para tomar una decisión sobre cada número, usamos una pequeña máquina. Esta máquina mira cada número y pregunta: "¿Está este número también en la otra caja (array2)?".
   
   // Para responder a esa pregunta, utilizamos otra herramienta llamada includes(). Esta herramienta nos ayuda a buscar el número en la otra caja. Si el número está en la caja, la respuesta es "sí". Si no está, la respuesta es "no".
   
   // Si la respuesta de la máquina es "sí", significa que el número está en ambas cajas. Entonces, lo tomamos y lo ponemos en nuestra caja enComun.
   
   // Repetimos este proceso para cada número en la primera caja (array1).
}
buscoInterseccion([1, 4, 6], [4, 8, 7])
