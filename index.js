let edad = 16;

const cat1A = 2500; //16-25 años, hombre
const cat1B = 2350; //16-25 años, mujer
const cat2A = 2000; // 26-39 años hombre
const cat2B = 1850; // 26-39 años mujer
const cat3A = 1500; // 40-85 años  hombre
const cat3B = 1250; // 40-85 pero menos de 86 años  mujer

const generaCuota = (genero, edad) => {
    
    //Declaramos las variables
    genero = document.getElementById('genero').value;
    edad = document.getElementById('edad').value;
    let msj = '';
    let precio = 0;

    //Chequeamos si se coloco el valor de la edad

    if(edad === ''){
        msj = 'Necesitamos su EDAD para generar una CUOTA';
    }

    //Generamos el mensaje para menores de 16 años

    else if(edad < 16){
        msj = 'Todavia no puede comprar seguro de auto';
    }

    //Generamos la cuota para mayores a 16 pero menores a 26;    
    
    else if((edad < 26) && (genero === 'hombre')){
        msj ='El precio de su poliza es: ';
        precio = cat1A;
    }else if((edad < 26) && (genero === 'mujer')){
        msj ='El precio de su poliza es: ';
        precio = cat1B;

    //Generamos la cuota para mayores de 25 pero menores a 40
    
    } else if((edad < 40) && (genero === 'hombre')){
        msj ='El precio de su poliza es: ';
        precio = cat2A;
    } else if((edad < 40) && (genero === 'mujer')){
        msj ='El precio de su poliza es: ';
        precio = cat2B;
    }

    //Generamos la cuota para mujeres y hombres entre 40 y 85 años
    else if(edad >=40 && edad <=85 && genero === 'hombre'){
        msj = 'El precio de su poliza es: ';
        precio = cat3A;
    }else if(edad >=40 && edad <=85 && genero === 'mujer'){
        msj = 'El precio de su poliza es: ';
        precio = cat3B;
    } 

    //Generamos el mensaje para el resto de los casos
    else {
        msj = 'Lo sentimos no tenemos poliza disponible';
    }

    //Declaramos la variable para tener acceso al div del mensaje

    const cuota = document.getElementById('cuota');

    //Mostramos el precio y el mensaje si es que el precio no es 0;

    if(precio !== 0){
        cuota.innerHTML = `
        <div>
            <span>${msj}</span>
            <span>${precio}</span>
        </div>
        `;
    } 
    
    //Mostramos solamente el mensaje cuando el precio es 0;
    else {
        cuota.innerHTML = `
        <div>
            <span>${msj}</span>
        </div>
        `;
    }
}



// Clase 1 - SINTAXIS Y VARIABLES // 

const entrada = prompt("cuantos años tenes?")
const entrada2 = prompt("año de nacimiento (con 4 digitos)?")
const salida = "estas grande! ya tenes " + entrada + "?"
const salida2 = "ojo! si naciste en" + entrada2 + " " + "tenes que tener" + " " + (2023-entrada2) +"!!"
alert(salida)
alert(salida2)






// ***Clase 2*** - CONTROL DE FLUJOS //

// const edad = prompt("Hola! Cuantos años tenes?")

// const condicion = parseInt(edad) > 17

// if (condicion) {
//     alert("que bueno! sos mayor de edad!")
// } else {
//     alert("bueno, tranqui entonces")
// }


// const ingreso1 = prompt("ingrese su carta 1")
// const ingreso2 = prompt("ingrese su carta 2")

// let valor1 = 0

// forma larga de escribir ******

// if (ingreso1 === "J") {
//     valor1 =10
// }
// if (ingreso1 === "Q") {
//     valor1 =10
// }
// if (ingreso1 === "K") {
//     valor1 =10
// } else {
//     if (ingreso1 === "A") {
//         valor1 = 11
//     } else {
//         valor1 = parseInt(ingreso1)
//     }
// }

// forma corta de escribir ******

// if (ingreso1 === "J" || ingreso1 === "Q" || ingreso1 === "K") {
//     valor1 =10
// } else {
//     if (ingreso1 === "A") {
//         valor1 = 11
//     } else {
//         valor1 = parseInt(ingreso1)
//     }
// }

// if (ingreso2 === "J" || ingreso2 === "Q" || ingreso2 === "K") {
//     valor2 =10
// } else {
//     if (ingreso2 === "A") {
//         valor2 = 11
//     } else {
//         valor2 = parseInt(ingreso2)
//     }
// }

// const sumaDeLasDosCartas = valor1 + valor2
// const condicion = sumaDeLasDosCartas === 21

// if (condicion) {
//     alert("es Black Jack!!")
// } else {
//     alert("no es Black Jack!!")
// }






// ***Clase 3*** - Ciclos e iteraciones //


// ciclo******

// alert("me levanto")

// let respuesta = prompt("tengo hambre")
// while (respuesta === "si") {
//     alert("a comer")
//     respuesta = prompt("tengo hambre?")
// }

// alert("a mimir")


//ciclo exacto - ciclo por conteo******

// alert("me levanto")


// let cantKilosQueTengoQueComer = parseInt(prompt("cuantos kg queres comer hoy?")) //ciclo condicional

// while (isNaN(cantKilosQueTengoQueComer)) {
//     cantKilosQueTengoQueComer = parseInt(prompt("eso no es un numero, por favor, ingresalo nuevamente"))
// }

// let cantKilosQueYaComi = 0 //ciclo exacto

// while (cantKilosQueYaComi < cantKilosQueTengoQueComer) {
//     alert("adentro un kilito de pechuga")
//     cantKilosQueYaComi = cantKilosQueYaComi + 1
//     alert("ya comi" + cantKilosQueYaComi + "kilos")
// }

// alert("a mimir")