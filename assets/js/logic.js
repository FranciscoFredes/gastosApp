let saldoTotal = document.getElementById("saldoTotal");
const errorMsg = document.getElementById("errorIngreso");
const saldototalBtn = document.getElementById("saldoTotalBtn");
const saldoInicial = document.getElementById("saldoInicial");
const nombreError = document.getElementById("nombreError");
const valorGastoError = document.getElementById("gastoError");
const gastos = document.getElementById("gastos");
let valorGasto = document.getElementById("valorGasto");
const validarGasto = document.getElementById("valorgastoBtn");
const nombreGasto = document.getElementById("nombreGasto");
const saldoFinal = document.getElementById("saldoFinal");
const lista = document.getElementById("lista");
let tempAmount = 0;
let saldoInicialValue = 0;

saldototalBtn.addEventListener("click", () => {
  tempAmount = saldoTotal.value;

  if (tempAmount === "" || tempAmount < 0) {
    errorMsg.classList.remove("hide");
  } else {
    errorMsg.classList.add("hide");
    saldoInicial.innerHTML = tempAmount;
    saldoInicialValue = tempAmount;

    actualizarSaldo();
    saldoTotal.value = "";
  }
});

const actualizarSaldo = () => {
  saldoFinal.innerText = saldoInicialValue - gastos.innerText;
};

const crearLista = (nombreGasto, valorGasto) => {
  let sublistContent = document.createElement("div");
  sublistContent.classList.add("sublist-content", "flex-space");
  lista.appendChild(sublistContent);
  sublistContent.innerHTML = `<p class="productos">${nombreGasto}</p><p class="monto">${valorGasto}</p>`;

  let borrarBtn = document.createElement("button");
  borrarBtn.classList.add("fa-solid", "fa-trash-can", "delete");
  borrarBtn.style.fontSize = "1.2em";
  borrarBtn.addEventListener("click", () => {
    sublistContent.remove();
    actualizarGastos();
    actualizarSaldo();
  });
  sublistContent.appendChild(borrarBtn);
};

const actualizarGastos = () => {
  let totalGastos = 0;
  const montoGastos = document.querySelectorAll(".monto");
  for (let i = 0; i < montoGastos.length; i++) {
    totalGastos += parseInt(montoGastos[i].innerText);
  }
  gastos.innerText = totalGastos;
};

validarGasto.addEventListener("click", () => {
  if (tempAmount === "" || tempAmount < 0) {
    errorMsg.classList.remove("hide");
  } else {
    let gasto = parseInt(valorGasto.value);
    let suma = parseInt(gastos.innerText) + gasto;
    gastos.innerText = suma;

    actualizarSaldo();
    crearLista(nombreGasto.value, valorGasto.value);
    nombreGasto.value = "";
    valorGasto.value = "";
  }
});
