//Ejercicio 1: Encontrar el número mayor y menor

let numeros = [5,12,3,21,7,9]


let nummay = numeros[0]
let nummen = numeros[0]

for (i = 1; i < numeros.length; i++) {

//console.log(numeros[i])
  
let num = numeros[i]

if(num > nummay ){

 nummay = num
 
}

if(num < nummen){

    nummen = num

}

} 

console.log("El numero mayor es",nummay)
console.log("El numero menor es",nummen)


