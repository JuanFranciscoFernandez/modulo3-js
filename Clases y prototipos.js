//clases

// ;;;;;Estilo functionn:

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
//se colocan por afueraa, a lo ultimo de todo

Animal2.prototype.caga = function () {
    console.log('pufff cagando')
}

//Extencion de clasees
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log('Hola, mi nombre es ' + this.nombre + '. tengo ' + this.edad);
    }
}
class Programador extends Persona {
    constructor(nombre, edad, aniosDeExperiencia) {
        super(nombre, edad);
        this.aniosDeExperiencia = aniosDeExperiencia;
    }
    codear() {
        console.log('Soy ' + this.nombre + ' . Codeo desde hace ' + this.aniosDeExperiencia + ' anios.')
    }

}


var martin = new Persona('GUADA', 26);
var programador = new Programador('julian', 37, 4);
martin.saludar();
programador.codear();
programador.saludar()

