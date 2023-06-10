document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("btn");
    let resultado = document.getElementById("resultado");
  
    btn.addEventListener("click", calcular);
  
    function calcular() {
      let valorA = parseInt(document.getElementById("valorA").value);
      let operacao = document.getElementById("operacao").value;
      let valorB = parseInt(document.getElementById("valorB").value);
  
      if (operacao === "+") {
        somar();
      } else if (operacao === "-") {
        subtrair();
      } else if (operacao === "*") {
        multiplicar();
      } else if (operacao === "/") {
        dividir();
      }
    }
  
    function somar() {
      let valorA = parseInt(document.getElementById("valorA").value);
      let valorB = parseInt(document.getElementById("valorB").value);
      var resultadoSoma = valorA + valorB;
      resultado.innerText = resultadoSoma;
    }
  
    function subtrair() {
      let valorA = parseInt(document.getElementById("valorA").value);
      let valorB = parseInt(document.getElementById("valorB").value);
      var resultadoSubtracao = valorA - valorB;
      resultado.innerText = resultadoSubtracao;
    }
  
    function multiplicar() {
      let valorA = parseInt(document.getElementById("valorA").value);
      let valorB = parseInt(document.getElementById("valorB").value);
      var resultadoMultiplicacao = valorA * valorB;
      resultado.innerText = resultadoMultiplicacao;
    }
  
    function dividir() {
      let valorA = parseInt(document.getElementById("valorA").value);
      let valorB = parseInt(document.getElementById("valorB").value);
      var resultadoDivisao = valorA / valorB;
      resultado.innerText = resultadoDivisao;
    }
  });
  