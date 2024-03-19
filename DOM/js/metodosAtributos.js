const inputEdad = document.querySelector(".edad");
inputEdad.setAttribute("type", "number");

// Muestra el tipo de dato del formulario
console.log(inputEdad.getAttribute("type"));
document.write(inputEdad.getAttribute("type"));

inputEdad.removeAttribute("id"); // Elimina un atributo