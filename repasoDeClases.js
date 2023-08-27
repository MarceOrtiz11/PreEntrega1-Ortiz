// //Este archivo es solo para aplicar lo aprendido. Se borrará para la ultima entrega del curso de JS

//Saludo al tutor 

const nombre = prompt("Bienvenido Tutor, tu nombre es?")

function saludoAmistoso(nombre) {
    alert("Hola!, " + nombre + "!!!" + " Gracias por corregir esta pre-entrega!")
}

saludoAmistoso(nombre)

const salida2 = "Todo el codigo esta comentado para mejor comprension"
alert(salida2)

// PreEntrega2-Ortiz

class Seguro {
    constructor(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
    }
}

function pedirProducto() {
    const nombre = prompt('ingrese nombre cliente')
    const precio = parseFloat(prompt('ingrese valor poliza'))
    return new Seguro(nombre, precio)
}

const productos = []

let quiereSeguirComprando = true
while (quiereSeguirComprando) {
    const prod = pedirProducto()

    productos.push(prod)

    const resp = prompt('agrega otro item? s/n')
    if (resp === 'n') {
    quiereSeguirComprando = false
    }
}

let total = 0
const precios = productos.map(p => p.precio)
precios.forEach(p => { total = total + p })

alert('cliente debe abonar: $' + total)