// constructor 

const Producto = function (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// objeto

    let producto1 = new Producto ( "guitarras aerodyne special telecaster")
    let producto2 = new Producto ("guitarras american professional jazzmaster", 165000)
    let producto3 = new Producto ( "bajos jaguar bass edicion limitada", 420000)
    let producto4 = new Producto ("bajos flea jazz bass", 315000)
    let producto5 = new Producto ("bajos troy sanders bass", 190000)
    let producto6 = new Producto ("bajos american bass", 190000)
    let producto7 = new Producto ("guitarras american mustang", 550000)
    let producto8 = new Producto ("guitarras american stratocaster", 450000)

// array 

let lista = [producto1, producto2, producto3, producto4, producto5, producto6, producto7]

// función 


let ciclo = true ; 

while (ciclo) {

ciclo = false; 

function filtros() {
    let pregunta = prompt("¿Quiere buscar bajos o guitarras?").toUpperCase()
    const respuesta = lista.filter((instrumento) => instrumento.nombre.toUpperCase().includes(pregunta))
    console.log(respuesta);
}

let quiereaplicarFiltro = prompt("¿Quiere aplicar un filtro a su búsqueda?").toUpperCase()

if (quiereaplicarFiltro === "SI") {
    filtros()
} else {
    console.log(lista);
}

}


