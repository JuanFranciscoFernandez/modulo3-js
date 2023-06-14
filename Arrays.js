var nombres = ["lucas", "juan", "jose", "cachilo"] // el cero cuenta, osea lucas seria numero cero, juan numero 1, jose numero dos y asi...
console.log(nombres[2])

//llenar el array vacio conociendo el indice
var nombres = []
nombres[0] = "cachilo";
nombres[6] = "adolfo";

//Otra manera de llenar el array vacio
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
//ta dificil