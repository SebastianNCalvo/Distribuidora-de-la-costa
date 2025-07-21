// Explicación del simulador:

// ¡Buenas tardes Profe! La idea del simulador es emular un carrito de compras. Como la interaccion solo se da atraves de prompt, los productos son mostrados de a 1 y esperando que el cliente agrege o no al carrito.

// Funcionamiento del simulador:

// Dicho simulador comienza con la función de seleccionar la categoria del producto, a la cual se accede por el número de dicha categoria o por el nombre de la misma.
// Se ejecuta una función de la categoria seleccionada, la cual recorre el array filtrando la categoria y mostrandole uno a uno los productos con su valor por unidad. Una vez seleccionados, se especifica la cantidad y son pusheados al carrito que posteriormente será mostrado, detallando el ticket de gasto.

const nombre = prompt('¡Bienvenido! Ingrese su nombre por favor:');

let productosAlmacen = [
        {
            categoria: "alfajor",
            nombre: 'Milka Oreo',
            precio: 1500,
        },
        {
            categoria: "alfajor",
            nombre: 'Pepito',
            precio: 1200,
        },
        {
            categoria: "alfajor",
            nombre: 'Terrabusi',
            precio: 1000,
        },
        {
            categoria: "alfajor",
            nombre: 'Tri shot',
            precio: 900,
        },
    
        {
            categoria: "chocolate",
            nombre: 'Cofler con almendras',
            precio: 1300,
        },
        {
            categoria: "chocolate",
            nombre: 'Cofler con Rocklets',
            precio: 1100,
        },
        {
            categoria: "chocolate",
            nombre: 'Cofler Block',
            precio: 800,
        },
        {
            categoria: "chocolate",
            nombre: 'Cofler tres placeres',
            precio: 500,
        },
        {
            categoria: "snack",
            nombre: 'Papas fritas Jamón serrano',
            precio: 3000,
        },
        {
            categoria: "snack",
            nombre: 'Papas fritas sabor Ketchup',
            precio: 2800,
        },
        {
            categoria: "snack",
            nombre: 'Papas fritas acanaladas',
            precio: 2500,
        },
        {
            categoria: "snack",
            nombre: 'Papas fritas clasicas',
            precio: 2200,
        },
        {
            categoria: "pizza",
            nombre: 'Pizza de Mozzarella (Incluye 2 und)',
            precio: 10000,
        },
        {
            categoria: "pizza",
            nombre: 'Pizza de Mozarella XL',
            precio: 12000,
        },
        {
            categoria: "pizza",
            nombre: 'Pizza de Mozarella clásica',
            precio: 9000,
        },
        {
            categoria: "pizza",
            nombre: 'Pizza de Mozarella y jamón',
            precio: 9500,
        }
]

let cantidadIngresada;
let listaDeComprasConsola = [];
let total = 0;
let eleccion;
let finalCompra;

function seleccionarCategoria(){
    eleccionCategoria = prompt(`¡Hola ${nombre}! En nuestro almacen contamos con productos como: 1) Alfajores, 2) Chocolates, 3) Snacks y 4) Pizzas. ¿En cuál de dichos productos está interesado?`)
    if(eleccionCategoria == 1 || eleccionCategoria === "Alfajores"){
        eleccionAlfajores()
    } else if(eleccionCategoria == 2 || eleccionCategoria === "Chocolates"){
        eleccionChocolates()
    } else if(eleccionCategoria == 3 || eleccionCategoria === "snack"){
        eleccionSnack()
    } else if(eleccionCategoria == 4 || eleccionCategoria === "pizza"){
        eleccionPizza()      
    } else{
        seleccionarCategoria()
    }
    finalDeLaCompra()
}

function cantidadIngresadaComoEntero() {
  do {
    cantidadIngresada = prompt("Ingrese el número de unidades deseadas:");
    if (cantidadIngresada === null || cantidadIngresada == undefined) {
      return cantidadIngresada = 0;
    }
    cantidadIngresada = Number(cantidadIngresada);

  } while (!Number.isInteger(cantidadIngresada) || cantidadIngresada < 1);
  return cantidadIngresada;
}

function eleccionAlfajores() {
    for(let objeto of productosAlmacen.filter(productosAlmacen => productosAlmacen.categoria === "alfajor")){
        eleccion = prompt('Tenemos ' + objeto.nombre + ' a un precio de ' + objeto.precio +'. ¿Desea agregarlo al carrito? Indique "Si" o "No" ')
        if (eleccion === "Si" || eleccion === "si"){
            cantidadIngresadaComoEntero()
            total = total + cantidadIngresada * objeto.precio
            listaDeComprasConsola.push(objeto.categoria + ` ` + objeto.nombre + ` ${cantidadIngresada} ud ` + `$` + cantidadIngresada*objeto.precio)
        } else if (eleccion === "No" || eleccion === "no"){
            alert('Le muestro el siguiente producto')
        } else {
            alert('Opción no valida. Operación cancelada')
        }
    }
}

function eleccionChocolates() {
    for(let objeto of productosAlmacen.filter(productosAlmacen => productosAlmacen.categoria === "chocolate")){
        eleccion = prompt('Tenemos ' + objeto.nombre + ' a un precio de ' + objeto.precio +'. ¿Desea agregarlo al carrito? Indique "Si" o "No" ')
        if (eleccion === "Si" || eleccion === "si"){
            cantidadIngresadaComoEntero()
            total = total + cantidadIngresada * objeto.precio
            listaDeComprasConsola.push(objeto.categoria + ` ` + objeto.nombre + ` ${cantidadIngresada} ud ` + `$` +  cantidadIngresada*objeto.precio)
        } else if (eleccion === "No" || eleccion === "no"){
            alert('Le muestro el siguiente producto')
        } else {
            alert('Opción no valida. Operación cancelada')
        }
    }
}

function eleccionSnack() {
    for(let objeto of productosAlmacen.filter(productosAlmacen => productosAlmacen.categoria === "snack")){
        eleccion = prompt('Tenemos ' + objeto.nombre + ' a un precio de ' + objeto.precio +'. ¿Desea agregarlo al carrito? Indique "Si" o "No" ')
        if (eleccion === "Si" || eleccion === "si"){
            cantidadIngresadaComoEntero()
            total = total + cantidadIngresada * objeto.precio
            listaDeComprasConsola.push(objeto.categoria + ` ` + objeto.nombre + ` ${cantidadIngresada} ud ` + `$` +  cantidadIngresada*objeto.precio)
        } else if (eleccion === "No" || eleccion === "no"){
            alert('Le muestro el siguiente producto')
        } else {
            alert('Opción no valida. Operación cancelada')
        }
    }
}

function eleccionPizza() {
    for(let objeto of productosAlmacen.filter(productosAlmacen => productosAlmacen.categoria === "pizza")){
        eleccion = prompt('Tenemos ' + objeto.nombre + ' a un precio de ' + objeto.precio +'. ¿Desea agregarlo al carrito? Indique "Si" o "No" ')
        if (eleccion === "Si" || eleccion === "si"){
            cantidadIngresadaComoEntero()
            total = total + cantidadIngresada * objeto.precio
            listaDeComprasConsola.push(objeto.categoria + ` ` + objeto.nombre + ` ${cantidadIngresada} ud ` + `$` +  cantidadIngresada*objeto.precio)
        } else if (eleccion === "No" || eleccion === "no"){
            alert('Le muestro el siguiente producto')
        } else {
            alert('Opción no valida. Operación cancelada')
        }
    }
}

function finalDeLaCompra() {
    finalCompra = prompt('¿Desea comprar algo más? Indique "Si" o "No"')
    if(finalCompra === "Si" || finalCompra === "si"){
        seleccionarCategoria();
    } else if(finalCompra === "No" || finalCompra === "no"){
        alert(`El total es de $${total}.
            Por consola verá impreso su ticket.
            ¡Gracias por su compra!`)
    } else {
        alert(`El valor ingresado no es valido. Damos por finalizada su compra.
        El total es de $${total}.
        Por consola verá impreso su ticket.
        ¡Gracias por su compra!`)
    }
}

function ticketPorConsola() {
    listaDeComprasConsola.push(`Total a pagar $${total}`)
    console.log(listaDeComprasConsola)
}

window.onload = function(){
    seleccionarCategoria()
    ticketPorConsola()
}