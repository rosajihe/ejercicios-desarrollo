/// Función descifrarCodigo

const abcEspanol = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r",
    "s","t","u","v","w","x","y","z"]
//console.log(abcEspanol.length)
 

const numeros = ["13","1","14","7","16"]


function desCodigo(numeros){

const frase = []
let miCadena = ""
for(let i = 0 ;i < numeros.length; i++){

  //console.log(abcEspanol[numeros[i]-1])
  //console.log(numeros[i])
  const nuevo = abcEspanol[numeros[i]-1]
  frase.push(nuevo)
  miCadena = frase.join('')
 
}

 return miCadena

}

console.log("Palabra descifrada:", desCodigo(numeros))



 /////// Programa que descifre una lista de códigos


const codigoJunto = [["2","22","5","14"],["4","9","1"]]
 

 //console.log(codigoJunto)

function desCodigo(codigoJunto){

const frase = []
let miCadena = ""
for(let i = 0 ;i < codigoJunto.length; i++){

  const nuevo = abcEspanol[codigoJunto[i]-1]
  frase.push(nuevo)
  miCadena = frase.join('')
 
}

 return miCadena

}

const palabrasDes = codigoJunto.map(desCodigo);
const msgFinal = palabrasDes.join(' ');
console.log("Mensaje descifrado:", msgFinal);



