// Selecionar o elemento de input da área
let areaInput = document.getElementById("area");

// Adicionar um evento de input ao elemento da área
areaInput.addEventListener("input", function() {
  // Obter o valor inserido na área e converter para letras minúsculas
  let area = areaInput.value.toLowerCase();

  if (area === "front-end") {
    // Exibir as opções de framework para Front-End
    document.getElementById("res1").innerHTML = `
      Você quer aprender React, Vue ou Angular?</br>
      <input type="text" id="framework">
    `;

    // Selecionar o elemento de input do framework
    let frameworkInput = document.getElementById("framework");

    // Adicionar um evento de input ao elemento do framework
    frameworkInput.addEventListener("input", function() {
      // Obter o valor inserido no framework e converter para letras minúsculas
      let framework = frameworkInput.value.toLowerCase();

      // Verificar se o framework inserido é válido
      if (framework === "react" || framework === "vue" || framework === "angular") {
        // Exibir mensagem de opções de especialização
        document.getElementById("res2").innerText = `
          Poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack
        `;
      }
    });
  } else if (area === "back-end") {
    // Exibir as opções de framework para Back-End
    document.getElementById("res1").innerHTML = `
      Você quer aprender Java ou C#?</br>
      <input type="text" id="framework">
    `;

    // Selecionar o elemento de input do framework
    let frameworkInput = document.getElementById("framework");

    // Adicionar um evento de input ao elemento do framework
    frameworkInput.addEventListener("input", function() {
      // Obter o valor inserido no framework e converter para letras minúsculas
      let framework = frameworkInput.value.toLowerCase();

      // Verificar se o framework inserido é válido
      if (framework === "java" || framework === "c#") {
        // Exibir mensagem de opções de especialização
        document.getElementById("res2").innerText = `
          Poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack
        `;
      }
    });
  } else {
    // Limpar as respostas se a área não for Front-End ou Back-End
    document.getElementById("res1").innerHTML = "";
    document.getElementById("res2").innerText = "";
  }
});
