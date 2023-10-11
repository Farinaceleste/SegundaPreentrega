// funcion constructora 

const Producto = function (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// array

const Productos = [
    { nombre: " guitarras aerodyne special telecaster", precio: 210000},
    { nombre: "guitarras american professional jazzmaster", precio: 165000},
    { nombre: "bajos jaguar bass edicion limitada", precio: 420000},
    { nombre: "bajos flea jazz bass", precio: 315000},
    { nombre: "bajos troy sanders bass", precio: 190000},
    { nombre: "bajos american bass", precio: 190000},
    { nombre: "guitarras american mustang", precio: 550000},
    { nombre: "guitarras american stratocaster", precio: 450000},

]

function filtroBajos() {
    const Bajos = Productos.filter((bajos) => bajos.nombre.includes("bajos"))
    console.log(Bajos);
}

function filtroGuitarras() {
    const Guitarras = Productos.filter((guitarras) => guitarras.nombre.includes("guitarras"))
    console.log(Guitarras);
}

let quiereaplicarFiltro = prompt("¿Quiere aplicar un filtro a su búsqueda?")

if (quiereaplicarFiltro === "si") {
    let pregunta = prompt("¿Quiere buscar bajos o guitarras?")

    if (pregunta === "bajos") {
        filtroBajos();
    } else if (pregunta === "guitarras"){
        filtroGuitarras();
    }

} else {
    console.log(Productos);
}

