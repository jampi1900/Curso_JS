const titulo = document.querySelector(".titulo");

// Obtener texto de un elemento
console.log(titulo.textContent);
// Devuelve contenido HTML de un elemento
console.log(titulo.innerHTML);
// Devuelve contenido HTML completo de un elemento
console.log(titulo.outerHTML);

// Creacion de elementos HTML desde Javascript
const contenedor = document.querySelector("#contenedor");
const fragment = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
    const lista = document.createElement("LI");
    lista.innerHTML = `Este es un elemento de la lista ${i + 1}`;
    fragment.appendChild(lista);
}

contenedor.appendChild(fragment);