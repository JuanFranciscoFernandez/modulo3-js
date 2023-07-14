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




function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  let array = frase.split(' ')
  let arrayinvertido = array.split('')


  console.log(arrayinvertido)
}
asAmirror('estoy')