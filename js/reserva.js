const mesasSelect = document.getElementById("mesas");
const bebidasSelect = document.getElementById("bebidas");
const meserosSelect = document.getElementById("meseros");
const pedidosTable = document.getElementById("pedidosTable");
const orderSummary = document.getElementById("orderSummary");
const orderList = document.getElementById("orderList");
const guardarBtn = document.querySelector(".btn");

const bebidas = {
  Whisky: 150, // Precio del Whisky
  Vodka: 100,  // Precio del Vodka
  Tequila: 200, // Precio del Tequila
  Ron: 300, // Precio del Ron
  Ginebra: 250, // Precio del Ginebra
  Pisco: 245, // Precio del Pisco
  Brandy: 256, // Precio del Brandy
  Coñac: 345, // Precio del Coñac
  'Cerveza Corona': 267, // Precio de la Cerveza Corona
  Agua: 200, // Precio del Agua
  Baileys: 345, // Precio del Baileys
  Jägermeister: 344, // Precio del Jägermeister
  Khlibniy: 234,// Precio del Khlibniy
  'Jack Daniels (Whiskey)': 456, // Precio del Jack Daniels
  'Absolut (Vodka)': 347, // Precio del Absolut
  'Captain Morgan (Ron)': 246, // Precio del Captain Morgan
  'Red Star Er Guo (Vodka)': 400, // Precio del Red Star Er Guo
  'Bagpiper United Spirits (Whisky)': 345, // Precio del Bagpiper United Spirits
  "McDowell's (Whisky)": 344, // Precio McDowell
  "Smirnoff (Vodka)": 329, // Precio del Smirnoff
  // Resto de las bebidas con sus precios
};

const pedido = {
  mesa: "",
  mesero: "",
  bebida: "",
  precio: 0,
};

function actualizarTabla() {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${pedido.mesa}</td>
                  <td>${pedido.mesero}</td>
                  <td>${pedido.bebida}</td>
                  <td>${pedido.precio}</td>`;
  pedidosTable.appendChild(row);
}

function actualizarResumen() {
  const listItem = document.createElement("li");
  listItem.textContent = `Mesa: ${pedido.mesa}, Bebida: ${pedido.bebida}, Precio: ${pedido.precio}, Mesero: ${pedido.mesero}`;
  orderList.appendChild(listItem);
}

function guardarPedido() {
  if (pedido.mesa && pedido.mesero && pedido.bebida) {
    guardarBtn.innerText = "¡Pedido exitoso!";
    guardarBtn.style.backgroundColor = "#4CAF50";
    guardarBtn.style.cursor = "default";
    guardarBtn.disabled = true;

    actualizarTabla();
    actualizarResumen();
  }
}

mesasSelect.addEventListener("change", (event) => {
  pedido.mesa = event.target.value;
});

bebidasSelect.addEventListener("change", (event) => {
  pedido.bebida = event.target.value;
  pedido.precio = bebidas[event.target.value];
  bebidasSelect.style.backgroundColor = "#4CAF50";
});

meserosSelect.addEventListener("change", (event) => {
  pedido.mesero = event.target.value;
  meserosSelect.style.backgroundColor = "#4CAF50";
});
