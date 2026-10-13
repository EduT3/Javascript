document.addEventListener("DOMContentLoaded", function () {
  const resultado = document.getElementById("resultado");
  document.getElementById("btn").addEventListener("click", calcular);

  function calcular() {
    const textoA = document.getElementById("valorA").value.trim().replace(",", ".");
    const textoB = document.getElementById("valorB").value.trim().replace(",", ".");
    const operacao = document.getElementById("operacao").value.trim();
    const a = Number(textoA);
    const b = Number(textoB);
    if (!textoA || !textoB || !Number.isFinite(a) || !Number.isFinite(b)) {
      resultado.textContent = "Informe dois números válidos.";
      return;
    }
    if (operacao === "/" && b === 0) {
      resultado.textContent = "Não é possível dividir por zero.";
      return;
    }
    const operacoes = { "+": () => a + b, "-": () => a - b, "*": () => a * b, "/": () => a / b };
    if (!Object.hasOwn(operacoes, operacao)) {
      resultado.textContent = "Escolha uma operação: +, -, * ou /.";
      return;
    }
    const total = operacoes[operacao]();
    resultado.textContent = Number.isFinite(total) ? String(total) : "Resultado fora do limite numérico.";
  }
});
