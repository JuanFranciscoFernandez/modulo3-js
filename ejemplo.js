class Animal2 {
    constructor(nombre, edad, color) {
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
    }
    // //duerme = function () {
    //     console.log("Hola mi nombre es" + ' ' + this.nombre + " " + "y" + " " + "tengo" + ' ' + this.edad + " " + "anios")
    // }
}
let cucaracha = new Animal2('eureka', 10, 'marron caca')


//::::::P r o t o t i p o s ::::::::ls:::

Animal2.prototype.caga = function () {
    console.log(this.nombre + " " + 'caga y se tira muchos pedoss puuuuuhchh')
}
cucaracha.caga()