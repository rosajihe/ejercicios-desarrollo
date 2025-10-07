
let temperaturas = ["18","20","19","21","11"]
console.log(temperaturas)

temperaturas.push("17")

let antigua = temperaturas.shift()
//console.log(temperaturas)
let totalTem = 0

for(let i = 0; i < temperaturas.length; i++){

totalTem += Number(temperaturas[i])
}
console.log("La suma de las temperaturas es:", totalTem)

let promedio = totalTem / temperaturas.length
console.log("El promedio es :", promedio)

if(promedio > 25){
    console.log("Clima calido")
}
else if (promedio >= 15 || promedio <= 25){
    console.log("Clima templado")


}
else if (promedio < 15){
    console.log("Clima frio")


}

let temperaturaMaxima = Math.max(...temperaturas)
let temperaturaMinima = Math.min(...temperaturas)
console.log("La temperatura maxima fue:", temperaturaMaxima, "La minima fue:", temperaturaMinima, "Y el promedio fue:", promedio )


