//Ejercicio 2: Eliminar los números repetidos

let numeros = [2, 4, 2, 6, 4, 7, 8, 8]


function eliminarRepetidos(numeros){

let nuevo = []


for (let i = 0 ; i < numeros.length ; i++) {

if (nuevo.indexOf(numeros[i]) === -1) {
    
      nuevo.push(numeros[i]);
    }


}

return nuevo

}
console.log(eliminarRepetidos(numeros))
