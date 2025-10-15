let datos = [1, 2, 3, 4, 5]



function invertir(datos){

let nuevo = []

for (let i = datos.length - 1 ; i >= 0 ; i--) {

nuevo.push(datos[i])

}

return nuevo

}
console.log(invertir(datos))