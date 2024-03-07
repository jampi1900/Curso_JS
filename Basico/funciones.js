// Funcion
/*function factorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

let resultado = factorial(6);
console.log(resultado);*/

// Procedimiento
/*function saludo (nombre) {
    console.log("Bienvenido " + nombre);
}

saludo("Raul");*/

// Arrow function (Procedimento)
/*const fsaludo = (nombre) => {
    console.log("Bienvenido " + nombre);
}

fsaludo("Luis");*/

// Arrow function (Funcion)
const sumar = (a, b) => a + b;
console.log("Suma: ", sumar(3, 4));

const ffactorial = (n) => {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
};

console.log("Factorial de 5: ", ffactorial(5));