let numeros = [28,64,98,56,31,12,99,22]


let num1 = numeros[0]

for (i = 0; i < numeros.length; i++) {

// console.log(numeros[i])

  let num = numeros[i]
  

if(num > num1 ){

 num1 = num
 
}

} 

console.log("El numero mayor es",num1)


