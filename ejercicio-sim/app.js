// app.js
// Ejemplo de consumo de API de Los Simpson usando async / await

async function obtenerPersonajes() {
  try {
    const respuesta = await fetch('https://thesimpsonsapi.com/api/characters/4');
    const datos = await respuesta.json();
    console.log('Personajes obtenidos:', datos);
    mostrarPersonajes(datos);
  } catch (error) {
    console.error('Error al obtener los personajes:', error);
  }
}

// Ejecutar la función
obtenerPersonajes();


let info = document.getElementById('divinfo');
const imgurl = "https://cdn.thesimpsonsapi.com/200";

function mostrarPersonajes(datos){

info.innerHTML = 
"<div class='dbody'><h1>"+ datos.name + "</h1><h3>Age:"+ datos.age +"</h3><p>" + datos.description + "</p><div class='divimage'><img src="+ imgurl + datos.portrait_path + "></div></div>"
}