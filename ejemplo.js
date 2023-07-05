class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

}

let persona1 = new Persona('Cachilo', 27);

let persona2 = new Persona('Jorgita, alias la orejuda', 65)

Persona.prototype.saludar = function () {
    console.log('Hola, mi nombre es ', this.nombre, 'tengo ', this.edad, 'años')
}
Persona.prototype.diceputeadas = function () {
    console.log('Que miras bobo? ', 'anda pa alla')
}

persona1.saludar()
persona2.saludar()
persona1.diceputeadas()

