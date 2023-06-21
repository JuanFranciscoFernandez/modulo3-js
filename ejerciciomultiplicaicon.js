function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario retornar false.
    // Tu código:
 
 
    var mesesdesordenados = []

    for (var i = 0; i < array.length; i++) {
       if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
          mesesdesordenados.push(array[i]); 
    }
    else return "No se encontraron los meses pedidos"
    return mesesdesordenados;
   

 
 }