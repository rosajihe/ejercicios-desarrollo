 // URL del API de Los Simpson
const API_URL = 'https://api.sampleapis.com/simpsons/characters/1';

 // Referencia al contenedor donde mostraremos las tarjetas
const cards = document.getElementById('cards');

// 1) Función principal: obtener personajes del API
async function cargarPersonajes() {
try {
// Hacemos la petición con fetch
const respuesta = await fetch(API_URL);
// Convertimos la respuesta a formato JSON
const personajes = await respuesta.json();

// 2) Dibujamos las tarjetas con los primeros 20 personajes
mostrarTarjetas(personajes.slice(0, 20));
} catch (error) {
console.log("Error al cargar los personajes:", error);
cards.innerHTML = "No se pudieron cargar los personajes n";
}
}

// 3) Función para crear el HTML de cada tarjeta
function mostrarTarjetas(personajes) {
let html = "";

// Recorremos cada personaje y armamos su tarjeta
personajes.forEach(personaje => {
const id = personaje.id || personaje.idc || "Desconocido";
const nombre = personaje.name || personaje.character || "Desconocido";
const edad = personaje.age || "Desconocida";
const ocupacion = personaje.occupation || "—";
const imagen = personaje.image || "https://upload.wikimedia.org/wikipedia/commons/9/9d/Question_mark_alternate.svg";

html += `
    <div class="card__body">
                     
                    <h1 class="card__title">${nombre}</h1>
                    ID: ${id} <br>
                    Edad: ${edad} <br>
                    Ocupación: ${ocupacion}
                    <div class="card__media">
                    <img src="${ocupacion}" alt="">
                    </div>
    </div>





 `;
 });

 // Mostramos todo en el contenedor
cards.innerHTML = html;
 }

 // 4) Llamamos a la función principal para que se ejecute al cargar la página
 cargarPersonajes();
