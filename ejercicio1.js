let inventario =  []

inventario.push("lapiz","goma","zacapuntas","resistol")
//console.log(inventario)

inventario.unshift("tijeras")
console.log("Lista de inventario",inventario)



let eliminadoUltimo = inventario.pop()

console.log("El ultimo articulo eliminado es:",eliminadoUltimo)

let eliminadoPrimero = inventario.shift()
console.log("El primero articulo eliminado es:",eliminadoPrimero)



if(inventario.length > 3){
    console.log("Inventario lleno")
}
else if (inventario.length == 1 || inventario.length == 3){
    console.log("Inventario con espacio")


}
else if (inventario.length == 0){
    console.log("Inventario vacio")


}

console.log(inventario)
