let puntajes = []
puntajes.push("86","40","23","53")
puntajes.unshift("78")
console.log(puntajes)

let puntPrim = puntajes[0]
if(puntPrim > 50){
    let descartado = puntajes.shift()
}

let eliminado = puntajes.pop()
console.log("La lista actual es:",puntajes)

let totalP = 0
for( let i = 0; i < puntajes.length; i++){
console.log("PUNTAJE:")
if(puntajes[i] >= 80){

console.log(+ puntajes[i] + " Ganador!")
}
else if(puntajes[i] < 50){
console.log(+ puntajes[i] + " Todos deben mejorar")

}
else{
    console.log(+ puntajes[i] +  " Sigue intentando")
}

totalP += Number(puntajes[i])

}
console.log("La suma total es: ", totalP)


let promedioP = totalP / puntajes.length
//console.log("El promedio es: ", promedioP)

let maximoPuntaje = Math.max(...puntajes)
let minimoPuntaje = Math.min(...puntajes)
console.log("El puntaje mayor fue : "+ maximoPuntaje)
console.log("El puntaje menor fue : "+ minimoPuntaje)
console.log("El promedio fue: ", promedioP)


