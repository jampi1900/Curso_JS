// for
/*console.log("Tabla del 1 al 10");
for (let i = 1; i <= 10; i++) {
    console.log(`Tabla del ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${j} x ${i} = ${j * i}`);
    }
}*/

// while (Primero realiza la operacion de comparacion, despues ejecuta el bloque)
console.log("While");
let i = 1;
while (i <= 10) {
    console.log(i);
    i += 1;
}


// do while (Primero ejecuta el bloque y despues realiza la operacion de comparacion)
console.log("Do while");
let j = 1;

do {
    console.log(j);
    j += 1;
} while(j <= 10);