// Definicion de un array
let frutas = ["Manzana", "Platano", "Peras"];

// En c++ (Estatico)
//string frutas[10];
//frutas[1] = "Manzana"

// En javascript (Dinamico)
//let frutas = [];
//frutas.push("Manzana");

// Manipulacion de arrays
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

for (let index in frutas) {
  console.log(index)
  console.log(frutas[index]);
}

for (let fruta of frutas) {
  console.log(fruta);
}

// push()
frutas.push("Piña");
console.log(frutas);

// pop()
let x = frutas.pop()
console.log(x);
console.log(frutas);

// shift()
let y = frutas.shift();
console.log(y);
console.log(frutas);

// length
console.log(frutas.length);

// Definicion de objeto
let persona = {
  nombre: "Raul",
  edad: 20
};

let personas = [
  {
    nombre: "Raul",
    edad: 20
  },
  {
    nombre: "Luis",
    edad: 18
  }
];

// map()
/*let nombres = personas.map(function (persona) {
  return persona.nombre
});*/
let nombres = personas.map((persona) => persona.nombre);
console.log(nombres);

// foreach()
personas.forEach((persona) => {
  console.log(`Mi nombre es ${persona.nombre} y mi edad es ${persona.edad}`);
});

// reduce()
let sumaEdades = personas.reduce((acumulator, persona) => {
  return acumulator + persona.edad;
}, 0);

// Calcular la media de las edades
//console.log(sumaEdades / personas.length);


let word = "Hola mundo";
let aword = word.split("");
let objetoLetra = aword.reduce((acumulator, w) => {
  if (!acumulator[`${w}`]) {
    acumulator[`${w}`] = 1;
  } else {
    acumulator[`${w}`] += 1;
  }
  return acumulator;
}, {});
console.log(objetoLetra);

// some()
let someResult = personas.some((persona) => persona.nombre === "Raul"); // true
console.log(someResult);
let someResult2 = personas.some((persona) => persona.nombre === "Juan"); // false
console.log(someResult2);

// every()
let everyResult = personas.every((persona) => persona.nombre === "Raul"); 
console.log(everyResult);

let numerosPares = [2, 6, 8, 16, 24];
let everyResult2 = numerosPares.every((num) => num % 2 == 0);
console.log(everyResult2);

// filter ()
console.log(personas.filter((persona) => persona.edad >= 18)); // return personas

// Si no hubiera ninguna coincidencia
console.log(personas.filter((persona) => persona.edad < 10)); // return []

// find ()
console.log(personas.find((persona) => persona.nombre === "Raul")); // return persona

// Si no hubiera ninguna coincidencia
console.log(personas.find((persona) => persona.nombre === "Fernando")); // return undefined

// findIndex ()
console.log(personas.findIndex((persona) => persona.nombre === "Raul")); // return index: 0

// Si no hubiera ninguna coincidencia
console.log(personas.findIndex((persona) => persona.nombre === "Fernando")); // return -1

// includes()
console.log(frutas.includes("Manzana")); // return true;
console.log(frutas.includes("Mango")); // return false;

// join()
console.log(frutas.join("-"));

// sort()
let numeros = [7, 3, 5, 2, 1, 9];

// Ordenar ascendente
console.log(numeros.sort());
console.log(numeros.sort((a, b) => a - b));

// Ordenar descendente
console.log(numeros.reverse());
console.log(numeros.sort((a, b) => b - a));

// Ordenar ascendente
console.log(personas.sort((a, b) => {
  {
  if ( a.nombre < b.nombre ){
    return -1;
  }
  if ( a.nombre > b.nombre ){
    return 1;
  }
  return 0;
}
}));

// Ordenar descendente
console.log(personas.sort((a, b) => {
  {
  if ( a.nombre > b.nombre ){
    return -1;
  }
  if ( a.nombre < b.nombre ){
    return 1;
  }
  return 0;
}
}));
