const stockProductos = [
  {
    id: 1,
    nombre: "Whiskey Jack Daniel's",
    cantidad: 1,
    desc: "Elaborado y Filtrado de carbón y de Origen estadounidense, .... EN BODEGA",
    precio: 1200,
    img: "./img/Whiskey1.png",
  },
  {
    id: 2,
    nombre: "Whisky Buchanans 12 años",
    cantidad: 1,
    desc: "El clásico de hace más de 130 años, Origen Mexico, .... EN BODEGA",
    precio: 1500,
    img: "img/Whiskey2.png",
  },
  {
    id: 3,
    nombre: "Whisky Chivas 12 años",
    cantidad: 1,
    desc: "con notas de chocolate negro y aromas, Origen: Escocia, .... EN BODEGA",
    precio: 1570,
    img: "img/Whiskey3.png",
  },
  {
    id: 4,
    nombre: "Whisky Hibiki",
    cantidad: 1,
    desc: "Con fuertes notas de pino y robles de Origen: Japanese Harmony, .... EN BODEGA",
    precio: 1000,
    img: "img/Whiskey4.png",
  },
  {
    id: 5,
    nombre: "Johnnie Walter Red",
    cantidad: 1,
    desc: "Elaborado con notas de especias frescas de canela y pimienta de Origen: Escocés, .... EN BODEGA",
    precio: 1200,
    img: "img/Whiskey6.png",
  },
  {
    id: 6,
    nombre: "Whisky Glenfiddich 15",
    cantidad: 1,
    desc: "Elaborado en Sola malta añejado en roble americano nuevo, de Origen: Escocia, .... EN BODEGA ",
    precio: 1200,
    img: "./img/Whiskey5.png",
  },
  {
    id: 7,
    nombre: "Tequila Jose Cuervo Especial Silver",
    cantidad: 1,
    desc: "Características de suavidad y neutralidad de Origen: Mexico, .... EN BODEGA",
    precio: 1400,
    img: "./img/Tequila1.png",
  },
  {
    id: 8,
    nombre: "Tequila Gran Centenario Añejo",
    cantidad: 1,
    desc: "Seleccionando y cosechando con los mejores agaves de Origen: Mexico, .... EN BODEGA",
    precio: 1200,
    img: "img/Tequila2.png",
  },
  {
    id: 9,
    nombre: "Coctel White Russian",
    cantidad: 1,
    desc: "Licor Cafe y menta con toques amargos, .... EN BODEGA",
    precio: 1400,
    img: "img/pexel17.jpg",
  },
  {
    id: 10,
    nombre: "Cocteles Cups",
    cantidad: 1,
    desc: "Vermut rojo, Campari, frutos frescos y vermut, .... EN BODEGA",
    precio: 1200,
    img: "img/CoctelesCups.jpg",
  },
  {
    id: 11,
    nombre: "Coctel Cosmopolitan",
    cantidad: 1,
    desc: "Vodka, triple seco, zumo de lima y zumo de arándanos, .... EN BODEGA",
    precio: 1200,
    img: "img/licor8.png",
  },
  {
    id: 12,
    nombre: "Coctel Long Drinks",
    cantidad: 1,
    desc: "Con Whisky, azúcar, menta, lima, agua con gas y hielo, .... EN BODEGA",
    precio: 1200,
    img: "img/CoctelLongDrinks.jpg",
  },
];
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()

};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `;
    });
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
    `;
  } else {
    console.log("Algo");
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const juegoId = id;
  carrito = carrito.filter((juego) => juego.id !== juegoId);
  mostrarCarrito();
}
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

 function enviarCompra(e){
   e.preventDefault()
   const cliente = document.querySelector('#cliente').value
   const email = document.querySelector('#correo').value

   if(email === '' || cliente == ''){
     Swal.fire({
       title: "¡Debes completar tu email y nombre!",
       text: "Rellena el formulario",
       icon: "error",
       confirmButtonText: "Aceptar",
   })
 } else {

  const btn = document.getElementById('button');

// document.getElementById('procesar-pago')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_qxwi0jn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Finalizar compra';
      alert('Correo enviado!');
    }, (err) => {
      btn.value = 'Finalizar compra';
      alert(JSON.stringify(err));
    });
    
   const spinner = document.querySelector('#spinner')
   spinner.classList.add('d-flex')
   spinner.classList.remove('d-none')

   setTimeout(() => {
     spinner.classList.remove('d-flex')
     spinner.classList.add('d-none')
     formulario.reset()

     const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)


   }, 3000)
 }
 localStorage.clear()

 }