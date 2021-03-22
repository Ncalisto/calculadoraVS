const display = document.getElementById("display");
const numeros = document.querySelectorAll("[id*=tecla");
const operadores = document.querySelectorAll("[id*=op");

let novoNumero = true;
let op;
let numeroAntetior;

const operacaoPendente = () => op !== undefined;

const calcular = () => {
  if (operacaoPendente()) {
    const numeroAtual = parseFloat(display.textContent);
    novoNumero = true;
    // outra forma de fazer os calculos usando EVAL
    //const resultado = eval(`${numeroAntetior}${op}${numeroAtual}`);
    //atualizarDisplay(resultado);
    // eval apresenta erro por estar usando caractere especial em / e *

    if (op === "+") {
      atualizarDisplay(numeroAntetior + numeroAtual);
    } else if (op === "-") {
      atualizarDisplay(numeroAntetior - numeroAtual);
    } else if (op === "×") {
      atualizarDisplay(numeroAntetior * numeroAtual);
    } else if (op === "÷") {
      atualizarDisplay(numeroAntetior / numeroAtual);
    }
  }
};

const atualizarDisplay = (texto) => {
  if (novoNumero) {
    display.textContent = texto;
    novoNumero = false;
  } else {
    display.textContent += texto;
  }
};

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

numeros.forEach((numero) => numero.addEventListener("click", inserirNumero));

const selecionarOp = (evento) => {
  if (!novoNumero) {
    calcular();
    novoNumero = true;
    op = evento.target.textContent;
    numeroAntetior = parseFloat(display.textContent);
  }
};
operadores.forEach((op) => op.addEventListener("click", selecionarOp));

const ativarIgual = () => {
  calcular();
  op = undefined;
  // para a operação não ser continua depois do igual
  novoNumero = true;
};
document.getElementById("=").addEventListener("click", ativarIgual);

const limpar = () => (display.textContent = "");
document.getElementById("limpar").addEventListener("click", limpar);

const limparCalc = () => {
  limpar();
  op = undefined;
  novoNumero = true;
  numeroAntetior = undefined;
};
document.getElementById("limparCalc").addEventListener("click", limparCalc);

const removerUltimo = () =>
  (display.textContent = display.textContent.slice(0, -1));
document.getElementById("backspace").addEventListener("click", removerUltimo);