/*SE REORDENARON LAS LÍNEAS DEL CÓDIGO (DECLARACIONES / EXPRESIONES) PARA MEJOR ORGANIZACIÓN DEL ARCHIVO.*/

// Tenemos un li de productos // El comentario es inexacto y poco descriptivo.
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]
/*Se modificaron los nombres de constante 'li' y '$i' por alternativas más descriptivas ('listaProductos' y 'campoBusqueda').*/
const listaProductos = document.getElementById("lista-de-productos") //Se cambió método 'getElementsByName()' por 'getElementById()'.
const campoBusqueda = document.querySelector('input');//Se eliminó el operador '.' del argumento 'input'.
const botonDeFiltro = document.querySelector("button");

/* Se almacenó el ciclo 'for' dentro de la declaración de 'displayProductos()', una función que no había sido aún declarada pero sí llamada en la línea 35.*/
const displayProductos = productos => {
    for (let i = 0; i < productos.length; i++) {
      var producto = document.createElement("div") //Se modificó el nombre de la viariable 'd' por una alternativa más descriptiva ('producto').
      producto.classList.add("producto")

      var tituloProducto = document.createElement("p") //Se modificó el nombre de la viariable 'ti' por una alternativa más descriptiva ('tituloProducto').
      tituloProducto.classList.add("titulo")
      tituloProducto.textContent = productos[i].nombre

      var imagenProducto = document.createElement("img"); //Se modificó el  nombre de la viariable 'imagen' por una alternativa más descriptiva ('imagenProducto').
      imagenProducto.setAttribute('src', productos[i].img);

      producto.appendChild(tituloProducto)
      producto.appendChild(imagenProducto)
      listaProductos.appendChild(producto)
    }
}
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}

displayProductos(productos) // Se asume que la función 'displayProductos()' (hasta ahora no declarada) busca ejecutar el ciclo 'for' anterior, por lo que se guardó dicho ciclo en la declaración de esta función.
botonDeFiltro.onclick = function() {
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }

  const texto = campoBusqueda.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );
  /*Se omitió el ciclo 'for' definido abajo y, en su lugar, se agregó una llamada a la función displayProductos(), ya que realiza exactamente la misma ación.*/
  displayProductos(productosFiltrados)
  /* for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")

    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    d.appendChild(ti)
    d.appendChild(imagen)

    listaProductos.appendChild(d)
  } */
}
