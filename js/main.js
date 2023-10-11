// funcion constructora 

const Producto = function (nombre, precio, instrumento) {
    this.nombre = nombre;
    this.precio = precio;
    this.instrumento = instrumento;
}

// array

const Productos = [
    { nombre: "aerodyne special telecaster", precio: 210000, instrumento: "guitarra" },
    { nombre: "american professional jazzmaster", precio: 165000, instrumento: "guitarra" },
    { nombre: "jaguar bass edicion limitada", precio: 420000, instrumento: "bajo" },
    { nombre: "flea jazz bass", precio: 315000, instrumento: "bajo" },
    { nombre: "troy sanders bass", precio: 190000, instrumento: "bajo" },
    { nombre: "american bass", precio: 190000, instrumento: "bajo" },
    { nombre: "american mustang", precio: 550000, intrumento: "guitarra" },
    { nombre: "american stratocaster", precio: 450000, instrumento: "guitarra" },

]


/*let Confirmacion = prompt("¡Tenemos nuevos productos en stock! ¿Queres aplicar un filtro?");
let Resultado = Productos.filter((producto) => producto.nombre.includes(productoIngresado === "no")){
  if (Resultado === "no") {
  console.log(Resultados);
} else (Confirmacion === "si"); {
    let productoIngresado = prompt("Ingrese si quiere ver guitarras o bajos"); 
    console.log(Resultado);
}

*/

// let productoIngresado = prompt ("Quiere aplicar un filtro a su busqueda?");

// if (productoIngresado === "si") {
//     let guitarra = prompt ("¿Quiere buscar bajos o guitarras?")
//     let Guitarras = Productos.filter ((producto) => producto.nombre.includes ("guitarra"));
//     console.log (Guitarras)
// } else if (productoIngresado === "bajo"){
//     let Bajos = Productos.filter ((producto) => producto.nombre.includes ("bajo"))
//     console.log (Bajos);
// } else (productoIngresado === "no") {
//     console.log (Productos);
// }


// function filtroGuitarra {
//     let Guitarras = Productos.filter ((producto) => producto.nombre.includes ("guitarra"))
//     console.log (Guitarras)
// }

function filtroBajo() {
    const Bajos = Productos.filter((producto) => producto.nombre.includes("bajos"))
    console.log(Bajos)
}

function filtroGuitarras() {
    const Guitarras = Productos.filter((producto) => producto.nombre.includes("guitarras"))
    console.log(Guitarras)
}

let quiereaplicarFiltro = prompt("¿Quiere aplicar un filtro a su búsqueda?")

if (quiereaplicarFiltro === "si") {
    let pregunta = prompt("¿Quiere buscar bajos o guitarras?")
    if (pregunta === "bajos") {
        filtroBajos();
    } else {
        filtroGuitarras();
    }
} else {
    console.log(Productos);
}

