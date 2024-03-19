// Selector por id
let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerText);

// Selector por etiqueta
let parrafos = document.getElementsByTagName("p");
console.log(parrafos);

// Selector por clase
parrafo = document.getElementsByClassName("parrafo");
console.log(parrafo);

// Utilizar querySelector
let newParrafo = document.querySelector("#parrafo");
console.log(newParrafo);

let newParrafos = document.querySelectorAll(".parrafo");
console.log(newParrafos);
