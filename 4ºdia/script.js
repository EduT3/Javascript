const numeroDefinido = Math.floor(Math.random() * 10);
let chances = 3;
let btn = document.getElementById("btn");
let numEscolhido = document.getElementById("numEscolhido");
let element = document.getElementById("res");

btn.addEventListener("click", tiverChances);

function tiverChances() {
  if (chances > 0) {
    const numChosen = parseInt(numEscolhido.value);
    if (numeroDefinido === numChosen) {
      alert("Parabéns, você acertou!");
      btn.disabled = true;
      numEscolhido.disabled = true;
    } else {
      chances--;
      element.textContent = `Você errou e tem ${chances} tentativas restantes, tente novamente!`;
    }
  } else {
    element.textContent = "Você não tem mais chances!";
    btn.disabled = true;
    numEscolhido.disabled = true;
  }
}

console.log(numeroDefinido);
