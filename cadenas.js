/*----------------------Ejercicio1-------------------------------------*/
        // Definicion de una cadena
        let cadenaDoble = "Cadena con doble comilla!";
        console.log(cadenaDoble);
        // Cadena en comilla simple
        let cadenaSimple = 'Cadena con una comilla!';
        console.log(cadenaSimple);

//Resultado->Hola mundo, soy el usuario Yampier!

/*----------------------Ejercicio2-------------------------------------*/
        //Template string
        let numero = 5;
        let templateCadena = `Esto es una cadena en template string, El numero es ${numero}`;
        console.log(templateCadena)

        // Concatenar los cadenas
        let edad =  5;
        let concatenacion1 = "Mi nombre es Raul y edad es " + edad + " hola";
        console.log(concatenacion1);

        // Concatenar utilizando template string
        let concatenacion2 = `Mi nombre es Raul y edad es ${edad}`;
        console.log(concatenacion2);

        // Concatenar con la funcion concat
        let concatenacion3 = "Mi nombre es Raul y edad es ".concat("20");
        console.log(concatenacion3);

//Resultado->Esto es una cadena en template -> 5 !

/*----------------------Ejercicio3-------------------------------------*/
        //Longitud de una cadena
        let cadena = "Hola o mundo bye"; 
        console.log(cadena.length);//Resultado 13 caracteres

        //Funciones de busqueda at()
        console.log(cadena.at(5));//Resultado la m position

        //Funciones de busqueda
        console.log(cadena[5]);//Resultado la m position

        /*----------------------Ejercicio4-------------------------------------*/
        //startsWith => 
        console.log(cadena.startsWith("o"))//True sirve para buscar palabras o letras de del comienzo

        // endsWith => return bool
        console.log(cadena.endsWith("e")); //false busca palabras o letras del final
        console.log(cadena.endsWith("o")); //true  busca palabras o letras del final

        //includes
        console.log(cadena.includes("Hola")) // true o false por letras o palabras en cuanlquie parte
        
        // indexOf la posicion de la primera letra o palabra 
        console.log(cadena.indexOf("l")); // index: 2
        console.log(cadena.indexOf("e")); // index: -1  si no esta en la cadena -1
        console.log(cadena.indexOf("mun")); //index: 5
        
        // lastIndexOf el ultimo o busca no el primero
        console.log(cadena.indexOf("o")); // index: 1 primer o
        console.log(cadena.lastIndexOf("o")) //index: 9 ultimo o


        // Funciones de modificacion
        let num = 5;
        // padStart
        console.log(String(num).padStart(10, "0")) // 0000000005
        // padEnd
        console.log(String(num).padEnd(5, "0")) // 50000

        //repeat
        //let cadena = "Hola mundo";
        console.log(cadena.repeat(5)) // Repite 5 veces hola mundo

        //split
        console.log(cadena.split("m")) // Dividir cadenas

        // substring
        let indexStart = cadena.indexOf("m");
        let indexEnd = cadena.length;
        console.log(cadena.substring(indexStart, indexEnd))

        // toString Convertir a string
        console.log(String(num)) // Forma 1
        console.log(num.toString()) // Forma 2


        // toUpperCase
        let cadena2 = "HolA, Bienvenidos";
        console.log(cadena2.toUpperCase());

        // toLowerCase
        console.log(cadena2.toLowerCase());

        // trim
        let cadena3 = "           Raul Lima          ";
        console.log(cadena3.trim());

        // trimEnd
        console.log(cadena3.trimEnd());//quitar espacios finales

        // trimStart
        console.log(cadena3.trimStart());//quitar espacios iniciales

        // replace
        let cadena4 = "Naño";
        console.log(cadena4.replace("añ", "in"));//cambiar añ por in

        // replaceAll
        let cadena5 = "Hola mundo, bienvenido a mi mundo";
        console.log(cadena5.replace("mundo", "planeta"));
        console.log(cadena5.replaceAll("mundo", "planeta"));

    



