///////Inventario

const inventarios = [
{ nombre: "Espada de Luz", tipo: "arma", poder: 90 },
{ nombre: "Escudo del Alba", tipo: "defensa", poder: 70 },
{ nombre: "Poción Curativa", tipo: "consumible", poder: 25 },
{ nombre: "Arco del Viento", tipo: "arma", poder: 60 },
{ nombre: "Elixir del Caos", tipo: "consumible", poder: 100 }
];

///// Funcion que filtra por tipo

function filtrarTipo(tipo){
    
const personasFiltradas = inventarios.filter(inventario => inventario.tipo === tipo);

return personasFiltradas

}

console.log("Resultado:", filtrarTipo("arma"))



////Funcion que devuelve el mas poderoso

function fmasPoderoso(){

const elmaspoderoso = inventarios.reduce((fmasPoderoso, actual) => actual.poder > fmasPoderoso.poder ? actual : fmasPoderoso);
return elmaspoderoso
}

console.log("El mas poderoso es:",fmasPoderoso());


/////Funcion que devuelve el promedio del poder ,del tipo que asigne

function promedioPoder(tipo){
  const filtro = inventarios.filter(item => item.tipo === tipo)
  const totalPoder = filtro.reduce((suma, item) => suma + item.poder, 0)
  const prom = totalPoder / filtro.length
  return prom
  

}

console.log("El promedio de poder es:",promedioPoder("arma"));