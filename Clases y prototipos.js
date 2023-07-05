//clases

// ;;;;;Estilo function:

let Animal = function (nombre, edad, color) {
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
    //;;;;;;;;metodo
    this.duerme = function () {
        console.log('zzzzzzzz')
    };
    this.caga = function () {
        console.log(this.nombre + ' ' + "se esta echando terrible cago " + "y despues se va a dormir" + ' ' + this.duerme)
    }
}
//;;;;;;;;;;;;;Nueva INSTANCIA
let pato = new Animal('cachilo', 25, 'violeta')
pato.caga()



//estilo class:
class Animal2 {
    constructor(nombre, edad, color) {
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
    }//Metodo
    duerme = function () {
        console.log("cagando")
    }
}
var cucaracha = new Animal2("eureka", 10, "marron")

//::::::P r o t o t i p o s ::::::::::::
//se colocan por afuera, a lo ultimo de todo

Animal2.prototype.caga = function () {
    console.log('pufff cagando')
}

//Extencion de clases
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log('Hola, mi nombre es ', this.nombre,'tengo ',this.edad, 'años')
    }
}