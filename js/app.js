// const nombre = prompt('¡Biemvenido! Ingrese su nombre por favor:');

let productosAlmacen = ['Alfajores', 'Chocolates', 'Snacks', 'Pizzas'];

let alfajoresAlmacen = ['Milka Oreo', 'Pepito', 'Terrabusi', 'Tri shot'];
const precioAlfajores = [1500, 1200, 1000, 900];

let chocolatesAlmacen = ['Cofler con almendras', 'Cofler con Rocklets', 'Cofler Block', 'Cofler tres placeres'];
const precioChocolates = [1300, 1100, 800, 500];

let snackAlmacen = ['Papas fritas Jamón serrano', 'Papas fritas sabor Ketchup', 'Papas fritas acanaladas', 'Papas fritas clasicas'];
const precioSnack = [3000, 2800, 2500, 2200];

let pizzasAlmacen = ['Pizza de Mozzarella (Incluye 2 und)', 'Pizza de Mozarella XL', 'Pizza de Mozarella clásica', 'Pizza de Mozarella y jamón'];
const precioPizzas = [10000, 12000, 9000, 9500];

let productosAlmacen2 = [
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


let eleccion;
let eleccionAlfajores;
let eleccionChocolates;
let eleccionSnack;
let eleccionPizzas;
let cantidadIngresada;
let listaDeCompras = [];
let listaDeCompras2 =[];
let total = 0;
let otraSeleccion;
let eleccion2;
let finalCompra;

function probandoObjeto(){
    eleccionCategoria = prompt('En nuestro almacen contamos con productos como: 1) Alfajores, 2) Chocolates, 3) Snacks y 4) Pizzas. ¿En cuál de dichos productos está interesado?')
    if(eleccionCategoria == 1 || eleccionCategoria === "Alfajores"){
        eleccionAlfajores2()
        finalCompra = prompt('¿Desea comprar algo más? Indique "Si" o "No"')
        if(finalCompra === "Si" || finalCompra === "si"){
            probandoObjeto();
        } else if(finalCompra === "No" || finalCompra === "no"){
            alert(`Usted compró ${listaDeCompras2}.
            El total es de $${total}
            ¡Gracias por su compra!`)
        } else {
            alert(`El valor ingresado no es valido. Damos por finalizada su compra.
        El total es de $${total}`)
        }
    } else if(eleccionCategoria == 2 || eleccionCategoria === "Chocolates"){
        eleccionChocolates2()
        finalCompra = prompt('¿Desea comprar algo más? Indique "Si" o "No"')
        if(finalCompra === "Si" || finalCompra === "si"){
            probandoObjeto();
        } else if(finalCompra === "No" || finalCompra === "no"){
            alert(`Usted compró ${listaDeCompras2}.
            El total es de $${total}
            ¡Gracias por su compra!`)
        } else {
            alert(`El valor ingresado no es valido. Damos por finalizada su compra.
        El total es de $${total}`)
        }
    } else if(eleccionCategoria == 3 || eleccionCategoria === "snack"){
        eleccionSnack2()
        finalCompra = prompt('¿Desea comprar algo más? Indique "Si" o "No"')
        if(finalCompra === "Si" || finalCompra === "si"){
            probandoObjeto();
        } else if(finalCompra === "No" || finalCompra === "no"){
            alert(`Usted compró ${listaDeCompras2}.
            El total es de $${total}
            ¡Gracias por su compra!`)
        } else {
            alert(`El valor ingresado no es valido. Damos por finalizada su compra.
        El total es de $${total}`)
        }
    } else if(eleccionCategoria == 4 || eleccionCategoria === "pizza"){
        eleccionPizza2()
        finalCompra = prompt('¿Desea comprar algo más? Indique "Si" o "No"')
        if(finalCompra === "Si" || finalCompra === "si"){
            probandoObjeto();
        } else if(finalCompra === "No" || finalCompra === "no"){
            alert(`Usted compró ${listaDeCompras2}.
            El total es de $${total}
            ¡Gracias por su compra!`)
        } else {
            alert(`El valor ingresado no es valido. Damos por finalizada su compra.
        El total es de $${total}`)
        }
    }
}


function eleccionAlfajores2() {
    for(let objeto of productosAlmacen2.filter(productosAlmacen2 => productosAlmacen2.categoria === "alfajor")){
        eleccion2 = prompt('Tenemos ' + objeto.nombre + ' a un precio de ' + objeto.precio +'. ¿Desea agregarlo al carrito? Indique "Si" o "No" ')
        if (eleccion2 === "Si" || eleccion2 === "si"){
            cantidadIngresada = prompt('Indique la cantidad de unidades:')
            total = total + cantidadIngresada * objeto.precio
            listaDeCompras2.push(`${cantidadIngresada} ud de ` + objeto.categoria + ` `+ objeto.nombre )
        } else if (eleccion2 === "No" || eleccion2 === "no"){
            alert('Le muestro el siguiente producto')
        } else {
            alert('Opción no valida. Operación cancelada')
        }
    }
}

function eleccionChocolates2() {
    for(let objeto of productosAlmacen2.filter(productosAlmacen2 => productosAlmacen2.categoria === "chocolate")){
        eleccion2 = prompt('Tenemos ' + objeto.nombre + ' a un precio de ' + objeto.precio +'. ¿Desea agregarlo al carrito? Indique "Si" o "No" ')
        if (eleccion2 === "Si" || eleccion2 === "si"){
            cantidadIngresada = prompt('Indique la cantidad de unidades:')
            total = total + cantidadIngresada * objeto.precio
            listaDeCompras2.push(`${cantidadIngresada} ud de ` + objeto.categoria + ` `+ objeto.nombre )
        } else if (eleccion2 === "No" || eleccion2 === "no"){
            alert('Le muestro el siguiente producto')
        } else {
            alert('Opción no valida. Operación cancelada')
        }
    }
}

function eleccionSnack2() {
    for(let objeto of productosAlmacen2.filter(productosAlmacen2 => productosAlmacen2.categoria === "snack")){
        eleccion2 = prompt('Tenemos ' + objeto.nombre + ' a un precio de ' + objeto.precio +'. ¿Desea agregarlo al carrito? Indique "Si" o "No" ')
        if (eleccion2 === "Si" || eleccion2 === "si"){
            cantidadIngresada = prompt('Indique la cantidad de unidades:')
            total = total + cantidadIngresada * objeto.precio
            listaDeCompras2.push(`${cantidadIngresada} ud de ` + objeto.categoria + ` `+ objeto.nombre )
        } else if (eleccion2 === "No" || eleccion2 === "no"){
            alert('Le muestro el siguiente producto')
        } else {
            alert('Opción no valida. Operación cancelada')
        }
    }
}

function eleccionPizza2() {
    for(let objeto of productosAlmacen2.filter(productosAlmacen2 => productosAlmacen2.categoria === "pizza")){
        eleccion2 = prompt('Tenemos ' + objeto.nombre + ' a un precio de ' + objeto.precio +'. ¿Desea agregarlo al carrito? Indique "Si" o "No" ')
        if (eleccion2 === "Si" || eleccion2 === "si"){
            cantidadIngresada = prompt('Indique la cantidad de unidades:')
            total = total + cantidadIngresada * objeto.precio
            listaDeCompras2.push(`${cantidadIngresada} ud de ` + objeto.categoria + ` `+ objeto.nombre )
        } else if (eleccion2 === "No" || eleccion2 === "no"){
            alert('Le muestro el siguiente producto')
        } else {
            alert('Opción no valida. Operación cancelada')
        }
    }
}
    




function seleccionarProducto(){
    eleccion = prompt(`Selecciona cualquiera de nuestros productos: 
        1) ${productosAlmacen[0]}
        2) ${productosAlmacen[1]}
        3) ${productosAlmacen[2]}
        4) ${productosAlmacen[3]}`);
    if(eleccion == 1){
        seleccionoAlfajores()
    } else if(eleccion == 2){
        seleccionoChocolates()
    } else if(eleccion == 3){
        seleccionoSnack()
    } else if(eleccion == 4){
        seleccionoPizza()
    } else {
        alert(`El valor ingresado no es valido. Damos por finalizada su compra.
        El total es de $${total}`)
    }
}


function seleccionarCantidad(){
    cantidadIngresada = prompt('Indique las unidades que desea: ');
    return cantidadIngresada
}

function seleccionoAlfajores(){
    eleccionAlfajores = prompt(`Selecciona cualquiera de nuestros productos: 
        1) ${alfajoresAlmacen[0]} con valor de $${precioAlfajores[0]}
        2) ${alfajoresAlmacen[1]} con valor de $${precioAlfajores[1]}
        3) ${alfajoresAlmacen[2]} con valor de $${precioAlfajores[2]}
        4) ${alfajoresAlmacen[3]} con valor de $${precioAlfajores[3]}
        5) Volver`);

    if(eleccionAlfajores != 1 && eleccionAlfajores != 2 && eleccionAlfajores != 3 && eleccionAlfajores != 4 && eleccionAlfajores != 5) {
        alert('La opción elegida no es valida. Intentelo nuevamente');
        seleccionoAlfajores();
    } else if( eleccionAlfajores == 5){
        seleccionarProducto()
    }
    else{
        seleccionarCantidad();
        total = total + cantidadIngresada * precioAlfajores[eleccionAlfajores-1]
        listaDeCompras.push(`${cantidadIngresada} und. de ${alfajoresAlmacen[eleccionAlfajores-1]} a un precio de $${precioAlfajores[eleccionAlfajores-1]} c/u`); 
        nuevaSeleccion()
    }
}



function seleccionoChocolates(){
    eleccionChocolates = prompt(`Selecciona cualquiera de nuestros productos: 
        1) ${chocolatesAlmacen[0]} con valor de $${precioChocolates[0]}
        2) ${chocolatesAlmacen[1]} con valor de $${precioChocolates[1]}
        3) ${chocolatesAlmacen[2]} con valor de $${precioChocolates[2]}
        4) ${chocolatesAlmacen[3]} con valor de $${precioChocolates[3]}
        5) Volver`);

    if(eleccionChocolates != 1 && eleccionChocolates != 2 && eleccionChocolates != 3 && eleccionChocolates != 4 && eleccionChocolates != 5) {
        alert('La opción elegida no es valida. Intentelo nuevamente');
        seleccionoAlfajores();
    } else if( eleccionChocolates == 5){
        seleccionarProducto()
    } else{
        seleccionarCantidad();
        total = total + cantidadIngresada * precioChocolates[eleccionChocolates-1]
        listaDeCompras.push(`${cantidadIngresada} und. de ${chocolatesAlmacen[eleccionChocolates-1]} a un precio de $${precioChocolates[eleccionChocolates-1]} c/u`); 
        nuevaSeleccion()
    }
}

function seleccionoSnack() {
    eleccionSnack = prompt(`Selecciona cualquiera de nuestros productos: 
        1) ${snackAlmacen[0]} con valor de $${precioSnack[0]}
        2) ${snackAlmacen[1]} con valor de $${precioSnack[1]}
        3) ${snackAlmacen[2]} con valor de $${precioSnack[2]}
        4) ${snackAlmacen[3]} con valor de $${precioSnack[3]}
        5) Volver`);
    if(eleccionSnack != 1 && eleccionSnack != 2 && eleccionSnack != 3 && eleccionSnack != 4 && eleccionSnack != 5) {
        alert('La opción elegida no es valida. Intentelo nuevamente');
        seleccionoAlfajores();
    } else if( eleccionSnack == 5){
        seleccionarProducto()
    } else{
        seleccionarCantidad();
        total = total + cantidadIngresada * precioSnack[eleccionSnack-1]
        listaDeCompras.push(`${cantidadIngresada} und. de ${snackAlmacen[eleccionSnack-1]} a un precio de $${precioSnack[eleccionSnack-1]} c/u`); 
        nuevaSeleccion()
    }
}

function seleccionoPizza() {
    eleccionPizzas = prompt(`Selecciona cualquiera de nuestros productos: 
        1) ${pizzasAlmacen[0]} con valor de $${precioPizzas[0]}
        2) ${pizzasAlmacen[1]} con valor de $${precioPizzas[1]}
        3) ${pizzasAlmacen[2]} con valor de $${precioPizzas[2]}
        4) ${pizzasAlmacen[3]} con valor de $${precioPizzas[3]}
        5) Volver`);
    if(eleccionPizzas != 1 && eleccionPizzas != 2 && eleccionPizzas != 3 && eleccionPizzas != 4 && eleccionPizzas != 5) {
        alert('La opción elegida no es valida. Intentelo nuevamente');
        seleccionoAlfajores();
    } else if( eleccionPizzas == 5){
        seleccionarProducto()
    } else{
        seleccionarCantidad();
        total = total + cantidadIngresada * precioPizzas[eleccionPizzas-1]
        listaDeCompras.push(`${cantidadIngresada} und. de ${pizzasAlmacen[eleccionPizzas-1]} a un precio de $${precioPizzas[eleccionPizzas-1]} c/u`); 
        nuevaSeleccion()
    }
}

function nuevaSeleccion(){
    otraSeleccion = prompt(`¿Desea comprar algo más?
        1) Si
        2) No`)
    if(otraSeleccion == 1){
        seleccionarProducto()
    } else if(otraSeleccion == 2){
        return alert(`Usted compró ${listaDeCompras}.
            El total es de $${total}
            ¡Gracias por su compra!`)
    } else {
        alert(`El valor ingresado no es valido. Damos por finalizada su compra.
        El total es de $${total}`)
    }
}



window.onload = function(){
    probandoObjeto()
    // seleccionarProducto()
}