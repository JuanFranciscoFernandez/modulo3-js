function saludar (saludo){
    return function (nombre){
        console.log(saludo + " " + nombre)
    }
}

//console.log(saludar('hola'))
    
var contenedor = saludar('hola');

contenedor('juan');
contenedor('cachilo');

var contenedor2 = saludar('hello Sr ')

contenedor2('raul')