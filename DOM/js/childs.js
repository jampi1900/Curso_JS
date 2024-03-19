//const contenedor = document.querySelector("#contenedor");

const primerHijo = contenedor.firstChild;
const ultimoHijo = contenedor.lastChild;
const primerEHijo = contenedor.firstElementChild;
const ultimoEHijo = contenedor.lastElementChild;

console.log(primerHijo);
console.log(primerEHijo);

console.log(ultimoHijo);
console.log(ultimoEHijo);

// childNodes
console.log(contenedor.childNodes);

// children
console.log(contenedor.children);


// Métodos de Childs
const contenedor2 = document.querySelector("#contenedor2");

const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Soy el H2 nuevo";
const parrafo = document.createElement("P");
parrafo.innerHTML = "Párrafo";
contenedor2.appendChild(parrafo);
const h2_antiguo = document.querySelector("h2");
contenedor2.replaceChild(h2_nuevo, h2_antiguo); // Metodo replaceChild()

let respuesta = h2_nuevo.hasChildNodes(); // Metodo hasChildNodes()
console.log(respuesta);

console.log(document.querySelector("#contenedor3").hasChildNodes()); // Metodo hasChildNodes()

// Propiedades de Parents (Padres)
console.log(h2_nuevo.parentElement);
console.log(contenedor.parentNode);

// Propiedades de Siblings (Hermanos)
console.log(h2_nuevo.nextSibling); // Funciona solamente en HTML minificado
console.log(h2_nuevo.previousSibling); // Funciona solamente en HTML minificado
console.log(h2_nuevo.nextElementSibling);
console.log(h2_nuevo.previousElementSibling);

// Método para buscar un elemento
const el = document.getElementById("div-03");

// El ancestro más cercano con el id de "div-02"
console.log(el.closest("#div-02")); // <div id="div-02">

//  El ancestro más cercano que es un div dentro de un div
console.log(el.closest("div div")); // <div id="div-03">

// El ancestro más cercano que es un div y tiene un padre article
console.log(el.closest("article > div")); // <div id="div-01">

// El ancestro más cercano que no sea un div
console.log(el.closest(":not(div)")); // <article>
