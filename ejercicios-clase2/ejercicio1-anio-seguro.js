///////Función AñoSeguro

function anioSeguro(anio){
    

if(anio % 1 !== 0){
console.log("El numero no es entero")
}


const numcad = String(anio)
let sumdig = 0
const ultimosDos = String(anio).slice(-2); 

for(let i = 0;i< numcad.length;i++){

    sumdig += parseInt(numcad[i])

}

if((anio % 4 === 0 && ultimosDos !== "00") || (ultimosDos === "00" && anio % 400 === 0) ) {

if(sumdig % 2 === 0){



    return true
   

    

}
}

else{
return false

}


}
console.log(anioSeguro(2000))



/////// Bucle que muestre en consola los años seguros entre 1900 y 2025

for (let j = 1990; j <= 2025; j++) {
    
const numcadfecha = String(j)
let sumfecha = 0
const ultimosDosfecha = String(j).slice(-2); 

for(let h = 0;h< numcadfecha.length;h++){

    sumfecha += parseInt(numcadfecha[h])

}


if((j % 4 === 0 && ultimosDosfecha !== "00") || (ultimosDosfecha === "00" && j % 400 === 0) ) {

if(sumfecha % 2 === 0){

    console.log( j + " Es un año seguro")

}
}


}