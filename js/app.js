// Explicación del simulador:

// ¡Buenas tardes Profe! La idea del simulador es emular un carrito de compras. Como la interaccion solo se da atraves de prompt, los productos son mostrados de a 1 y esperando que el cliente agrege o no al carrito.

// Funcionamiento del simulador:

// Dicho simulador comienza con la función de seleccionar la categoria del producto, a la cual se accede por el número de dicha categoria o por el nombre de la misma.
// Se ejecuta una función de la categoria seleccionada, la cual recorre el array filtrando la categoria y mostrandole uno a uno los productos con su valor por unidad. Una vez seleccionados, se especifica la cantidad y son pusheados al carrito que posteriormente será mostrado, detallando el ticket de gasto.

class Producto {
    constructor(id, categoria, nombre, precio, img){
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img
    }
}
let alfajorArrozDDL = new Producto("alfajor-arroz-ddl", "alfajor", "Alfajor de Arroz Dulce de leche X6 Chocoarroz Paq 132 Grm", 5999, "../multimedia/productos/chocoarroz-oferta-dl.jpg");
let alfajorArrozFrutilla = new Producto("alfajor-arroz-frutilla", "alfajor", "Alfajor de Arroz Frutilla X6 Chocoarroz Paq 132 Grm", 5999, "../multimedia/productos/chocoarroz-oferta-frutilla.jpg");
let alfajorArrozLimon = new Producto("alfajor-arroz-limon", "alfajor", "Alfajor de Arroz Limon X6 Chocoarroz Paq 132 Grm", 5999, "../multimedia/productos/chocoarroz-oferta-limon.jpg");
let alfajorArrozMarroc = new Producto("alfajor-arroz-marroc", "alfajor", "Alfajor de Arroz Marroc X6 Chocoarroz Paq 132 Grm", 5999, "../multimedia/productos/chocoarroz-oferta-marroc.jpg");
let panFacilitas = new Producto("pan-facilitas", "pan", "Pan de mesa con salvado Facilitas 360gr", 2299, "../multimedia/productos/pan-lactal-facilitas.jpg");
let panLaPerla = new Producto("pan-la-perla", "pan", "Pan de mesa La Perla 330gr", 2199, "../multimedia/productos/pan-lactal-la-perla.jpg");
let panLacteadoMendia = new Producto("pan-mendia", "pan", "Pan de mesa lacteado Mendia 360gr", 1999, "../multimedia/productos/pan-lactal-mendia.jpg");
let panMultiCerealNoly = new Producto("pan-noly", "pan", "Pan linea dorada multi cereal Noly 360gr", 1999, "../multimedia/productos/pan-lactal-noly.jpg");



const array2x1 = [alfajorArrozDDL, alfajorArrozFrutilla, alfajorArrozLimon, alfajorArrozMarroc];
const array20Off = [panFacilitas, panLaPerla, panLacteadoMendia, panMultiCerealNoly];


const cargarDomOfertas = () => {
    let divContenedor2x1 = document.getElementById("divContenedor2x1")
    array2x1.forEach(producto => {
        let div = document.createElement("div");
        div.className = "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6"
        div.innerHTML = `
            <div class="cajita">
                <img class="img_shadow" src="${producto.img}" alt="">
                <p class="descripcion-fotos">${producto.nombre}</p>
                <span>${producto.precio}</span>
                <input type="button" value="Agregar" id="${producto.id}">                
            </div>
            `;
        divContenedor2x1.appendChild(div)
    });

    let divContenedor20Off = document.querySelector("#divContenedor20Off");
    array20Off.forEach(producto => {
        let div = document.createElement("div");
        div.className = "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6"
        div.innerHTML = `
            <div class="cajita">
                <img class="img_shadow" src="${producto.img}" alt="">
                <p class="descripcion-fotos">${producto.nombre}</p>
                <span>${producto.precio}</span>
                <input type="button" value="Agregar" id="${producto.id}">                
            </div>
            `;
        divContenedor20Off.appendChild(div)
    })

}
cargarDomOfertas()

let seleccionaArrozDDL = document.getElementById('alfajor-arroz-ddl');
let seleccionaArrozFrutilla = document.getElementById('alfajor-arroz-frutilla');
let seleccionaArrozLimon = document.getElementById('alfajor-arroz-limon');
let seleccionaArrozMarroc = document.getElementById('alfajor-arroz-marroc');
let seleccionaPanFacilitas = document.getElementById('pan-facilitas');
let seleccionaPanLaPerla = document.getElementById('pan-la-perla');
let seleccionaPanMendia = document.getElementById('pan-mendia');
let seleccionaMultiCerealNoly = document.getElementById('pan-noly');



seleccionaArrozDDL.addEventListener('click', function(){
    alert(`Seleccionaste ${alfajorArrozDDL.nombre}`)
    localStorage.setItem(`${alfajorArrozDDL.nombre}`, `${alfajorArrozDDL.precio}`)
})

seleccionaArrozFrutilla.addEventListener('click', function(){
    alert(`Seleccionaste ${alfajorArrozFrutilla.nombre}`)
    localStorage.setItem(`${alfajorArrozFrutilla.nombre}`, `${alfajorArrozFrutilla.precio}`)
})

seleccionaArrozLimon.addEventListener('click', function(){
    alert(`Seleccionaste ${alfajorArrozLimon.nombre}`)
    localStorage.setItem(`${alfajorArrozLimon.nombre}`, `${alfajorArrozLimon.precio}`)
})

seleccionaArrozMarroc.addEventListener('click', function(){
    alert(`Seleccionaste ${alfajorArrozMarroc.nombre}`)
    localStorage.setItem(`${alfajorArrozMarroc.nombre}`, `${alfajorArrozMarroc.precio}`)
})

seleccionaPanFacilitas.addEventListener('click', function(){
    alert(`Seleccionaste ${panFacilitas.nombre}`)
    localStorage.setItem(`${panFacilitas.nombre}`, `${panFacilitas.precio}`)
})

seleccionaPanLaPerla.addEventListener('click', function(){
    alert(`Seleccionaste ${panLaPerla.nombre}`)
    localStorage.setItem(`${panLaPerla.nombre}`, `${panLaPerla.precio}`)
})

seleccionaPanMendia.addEventListener('click', function(){
    alert(`Seleccionaste ${panLacteadoMendia.nombre}`)
    localStorage.setItem(`${panLacteadoMendia.nombre}`, `${panLacteadoMendia.precio}`)
})

seleccionaMultiCerealNoly.addEventListener('click', function(){
    alert(`Seleccionaste ${panMultiCerealNoly.nombre}`)
    localStorage.setItem(`${panMultiCerealNoly.nombre}`, `${panMultiCerealNoly.precio}`)
})
