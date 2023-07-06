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
