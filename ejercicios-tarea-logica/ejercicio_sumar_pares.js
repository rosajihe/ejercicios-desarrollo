// Ejercicio 3: Sumar solo los números pares

let miArreglo = [3, 8, 5, 12, 7, 6]

let suma = 0
function sumarPares(miArreglo){

for (let i = 0 ; i < miArreglo.length ; i++) {

if (miArreglo[i] % 2 === 0) {
    
      suma += miArreglo[i]
    }


}

return suma

}
console.log(sumarPares(miArreglo))
