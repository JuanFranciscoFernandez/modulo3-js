// Operador && (si no se cumple una condicion sera falsa toda la condicion.)(o todo true o false)
//function MayorYMenorYPar(numero) {
//   if (numero > 5 && numero < 10 && numero % 2 === 0) console.log(true);
// else console.log(false);
//}
//MayorYMenorYPar(7)



//Operador or (||) dara true si UNA SOLA de las condiciones se cumple.
//function operadorOr(str) {
//if (str === 'Henry' || str.length < 2) console.log(true);
//else console.log(false);
//}
//operadorOr('a')

//Operador not
//function negacion(permiso) {
//  if (!permiso) console.log('Tiene permiso')
//}
//negacion(true)
//negacion(false)

//MEZCLA DE LOS TRES:
function condicionCompleja(num) {
    if (num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
}
condicionCompleja(10)
condicionCompleja(6)
condicionCompleja(3)
condicionCompleja(5)

/* Primero se resuelve la operacion del AND y despues la del OR

num > 9 && num % 2 === 0 || num === 3 

*/


var PutoElQueLoLee = 'jlaja'
