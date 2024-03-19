const inputNormal = document.querySelector(".input-normal");

// Atributo className
document.write(inputNormal.className + "<br>");

// Atributo value
// Asignar el valor
// document.querySelector(".input-normal").value = "100"
inputNormal.value = "100";

// document.querySelector(".input-normal").value // Obtener valor
document.write(inputNormal.value + "<br>");

// Atributo type
inputNormal.type = "range";
document.write(inputNormal.type + "<br>");

inputNormal.type = "file";
inputNormal.accept = "image/*"

// Atributo form
const submit = document.querySelector("#submit");
submit.setAttribute("form", "formulario");

// Atributo minLength
const inputLimit = document.querySelector("#input-limit");
inputLimit.minLength = 5;

// Atributo placeholder
inputLimit.placeholder = "Ingrese tu telefono";

// Atributo required
inputLimit.required = "required";
