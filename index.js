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

//Intervalo automatico 

const actualizador = setInterval(function(){

//Definimos el tiempo de inicio en milisegundos

const inicioClase = new Date('August 31, 2023 23:59:59').getTime();
console.log(inicioClase);

//Definimos el tiempo de ahora en milisegundos

const tiempoActual = new Date().getTime();
console.log(tiempoActual);

//Calculamos la diferencia entre el inicio y el tiempo actual;

let tiempoRestante = inicioClase - tiempoActual;
console.log(tiempoRestante);

//Convertimos los milisegundos en segundos 1s = 1000 ms;

tiempoRestante /=1000;
console.log(tiempoRestante);

//Calculamos los dias restantes

const dias = Math.floor(tiempoRestante/(60*60*24));
console.log(dias);

//Calculamos las horas restantes

const horas = Math.floor((tiempoRestante%(60*60*24))/(60*60));
console.log(horas);


//Calculamos los minutos restantes

const minutos = Math.floor((tiempoRestante%(60*60))/(60));
console.log(minutos);

//Calculamos los segundos restantes

const segundos = Math.floor(tiempoRestante%(60));
console.log(segundos);

const contador = document.getElementById('contador');


//Agregamos los elementos HTML con el valor del tiempo al contenedor con el id contador

contador.innerHTML = `
<div>
    <span>${dias}</span>
    <span class="texto">Dias</span>
</div> 
<div>
    <span>${horas}</span>
    <span class="texto">Horas</span>
</div>
<div>
    <span>${minutos}</span>
    <span class="texto">Minutos</span>
</div>
<div>
    <span>${segundos}</span>
    <span class="texto">Segundos</span>
</div>
`;
}, 1000);


console.log('test');



//Saludo al tutor para agregar Prompt, Alert y Function interactiva

const nombre = prompt("Bienvenido Tutor, tu nombre es?")

function saludoAmistoso(nombre) {
    alert("Hola!, " + nombre + "!!!" + " Gracias por corregir esta pre-entrega!")
}

saludoAmistoso(nombre)

const salida2 = "Todos los comentarios son bienvenidos!"
alert(salida2)

//Se borra todo el codigo comentado a pedido de la correccion de la 1er Pre Entrega