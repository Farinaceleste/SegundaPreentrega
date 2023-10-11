const Producto = function (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const productos = [
    { nombre: " guitarras aerodyne special telecaster", precio: 210000},
    { nombre: "guitarras american professional jazzmaster", precio: 165000},
    { nombre: "bajos jaguar bass edicion limitada", precio: 420000},
    { nombre: "bajos flea jazz bass", precio: 315000},
    { nombre: "bajos troy sanders bass", precio: 190000},
    { nombre: "bajos american bass", precio: 190000},
    { nombre: "guitarras american mustang", precio: 550000},
    { nombre: "guitarras american stratocaster", precio: 450000},
]

function filtros() {
    let pregunta = prompt("¿Quiere buscar bajos o guitarras?").toUpperCase()
    const respuesta = productos.filter((instrumento) => instrumento.nombre.toUpperCase().includes(pregunta))
    console.log(respuesta);
}   

let quiereaplicarFiltro = prompt("¿Quiere aplicar un filtro a su búsqueda?").toUpperCase()

if (quiereaplicarFiltro === "SI") {
    filtros()
    } else {
        console.log(productos);
    }




